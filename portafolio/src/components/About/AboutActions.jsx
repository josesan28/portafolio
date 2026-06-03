import { useEffect, useState } from 'react'

const COPY_FEEDBACK_DURATION = 2400

async function copyToClipboard(value) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(value)
    return
  }

  const helperField = document.createElement('textarea')
  helperField.value = value
  helperField.setAttribute('readonly', '')
  helperField.style.position = 'absolute'
  helperField.style.left = '-9999px'
  document.body.appendChild(helperField)
  helperField.select()
  document.execCommand('copy')
  document.body.removeChild(helperField)
}

export default function AboutActions({ links }) {
  const [copyState, setCopyState] = useState({
    status: 'idle',
    message: '',
  })

  useEffect(() => {
    if (copyState.status === 'idle') {
      return undefined
    }

    const timeoutId = window.setTimeout(() => {
      setCopyState({
        status: 'idle',
        message: '',
      })
    }, COPY_FEEDBACK_DURATION)

    return () => window.clearTimeout(timeoutId)
  }, [copyState.status])

  const handleCopyClick = async (value) => {
    try {
      await copyToClipboard(value)
      setCopyState({
        status: 'success',
        message: 'Correo copiado al portapapeles.',
      })
    } catch {
      setCopyState({
        status: 'error',
        message: 'No se pudo copiar el correo.',
      })
    }
  }

  return (
    <div className="about__actions-wrap">
      <div className="about__actions">
        {links.map((link, index) => {
          const icon = link.icon ? (
            <img
              src={link.icon}
              alt=""
              aria-hidden="true"
              className="about__btn-icon-image theme-asset--monochrome"
            />
          ) : null

          if (link.type === 'copy') {
            return (
              <button
                key={link.label}
                type="button"
                className={`about__btn about__btn--copy ${link.variant}`}
                style={{ '--action-index': index }}
                onClick={() => handleCopyClick(link.value)}
              >
                {icon}
                <span>{link.label}</span>
              </button>
            )
          }

          return (
            <a
              key={link.label}
              href={link.href}
              target={link.target}
              rel={link.rel}
              className={`about__btn ${link.variant}`}
              style={{ '--action-index': index }}
            >
              {icon}
              <span>{link.label}</span>
              <span className="about__btn-icon" aria-hidden="true">
                {link.variant === 'about__btn--primary' ? '↗' : '→'}
              </span>
            </a>
          )
        })}
      </div>

      {copyState.message ? (
        <div
          className={`about__actions-toast about__actions-toast--${copyState.status}`}
          role={copyState.status === 'error' ? 'alert' : 'status'}
          aria-live={copyState.status === 'error' ? 'assertive' : 'polite'}
        >
          <p className="about__actions-toast-text">{copyState.message}</p>
        </div>
      ) : null}
    </div>
  )
}
