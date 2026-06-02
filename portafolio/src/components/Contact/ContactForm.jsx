import { useEffect, useState } from 'react'

const initialFormState = {
  name: '',
  email: '',
  message: '',
}

const initialSubmissionState = {
  status: 'idle',
  message: '',
}

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit'
const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY
const FEEDBACK_DISMISS_DELAY = 3200

function getErrorMessage(message) {
  const normalizedMessage = message?.toLowerCase() || ''

  if (normalizedMessage.includes('too many requests')) {
    return 'Hubo varios intentos en poco tiempo. Intenta de nuevo en un momento.'
  }

  return 'No se pudo enviar el mensaje en este momento. Intenta de nuevo en un momento.'
}

export default function ContactForm() {
  const [formData, setFormData] = useState(initialFormState)
  const [submissionState, setSubmissionState] = useState(initialSubmissionState)

  useEffect(() => {
    if (
      submissionState.status !== 'success' &&
      submissionState.status !== 'error'
    ) {
      return undefined
    }

    const timeoutId = window.setTimeout(() => {
      setSubmissionState(initialSubmissionState)
    }, FEEDBACK_DISMISS_DELAY)

    return () => window.clearTimeout(timeoutId)
  }, [submissionState.status])

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    if (submissionState.status !== 'idle') {
      setSubmissionState(initialSubmissionState)
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!WEB3FORMS_ACCESS_KEY) {
      setSubmissionState({
        status: 'error',
        message:
          'Falta configurar la clave del formulario. Agrega VITE_WEB3FORMS_ACCESS_KEY antes de publicar.',
      })
      return
    }

    setSubmissionState({
      status: 'sending',
      message: 'Enviando mensaje...',
    })

    try {
      const payload = new FormData()

      payload.append('access_key', WEB3FORMS_ACCESS_KEY)
      payload.append('subject', 'Nuevo mensaje desde el portafolio')
      payload.append('from_name', 'Mi portafolio')
      payload.append('name', formData.name)
      payload.append('email', formData.email)
      payload.append('message', formData.message)
      payload.append('botcheck', '')

      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        body: payload,
      })

      const result = await response.json().catch(() => ({}))

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'No se pudo enviar el mensaje.')
      }

      setFormData(initialFormState)
      setSubmissionState({
        status: 'success',
        message: 'Mensaje enviado correctamente. Estoy al pendiente.',
      })
    } catch (error) {
      setSubmissionState({
        status: 'error',
        message:
          error instanceof Error
            ? getErrorMessage(error.message)
            : 'Ocurrió un problema al enviar el mensaje.',
      })
    }
  }

  const isSending = submissionState.status === 'sending'
  const shouldShowModal =
    submissionState.status === 'success' || submissionState.status === 'error'
  const feedbackModalClassName = [
    'contact__feedback-modal',
    submissionState.status === 'success' && 'contact__feedback-modal--success',
    submissionState.status === 'error' && 'contact__feedback-modal--error',
  ]
    .filter(Boolean)
    .join(' ')
  const feedbackLabel =
    submissionState.status === 'success'
      ? 'Mensaje enviado'
      : 'No se pudo enviar'

  return (
    <div className="contact__form-shell">
      <form className="contact__form" onSubmit={handleSubmit}>
        <input
          type="checkbox"
          name="botcheck"
          className="contact__botcheck"
          tabIndex="-1"
          autoComplete="off"
        />

        <div className="contact__form-grid">
          <label className="contact__field">
            <span>Nombre</span>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Tu nombre"
              required
            />
          </label>

          <label className="contact__field">
            <span>Correo</span>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="tu@correo.com"
              required
            />
          </label>
        </div>

        <label className="contact__field">
          <span>Mensaje</span>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Lo que quieras comunicar..."
            rows="6"
            required
          />
        </label>

        <div className="contact__form-footer">
          <div className="contact__form-copy">
            <p className="contact__note">
              El mensaje se envía directamente desde el sitio sin abrir tu
              cliente de correo.
            </p>
          </div>

          <button
            type="submit"
            className="contact__submit"
            disabled={isSending}
            aria-busy={isSending}
          >
            {isSending ? 'Enviando...' : 'Enviar mensaje'}
          </button>
        </div>
      </form>

      {shouldShowModal ? (
        <div
          className="contact__feedback-overlay"
          role={submissionState.status === 'error' ? 'alert' : 'status'}
          aria-live={submissionState.status === 'error' ? 'assertive' : 'polite'}
        >
          <div className={feedbackModalClassName}>
            <span className="contact__feedback-badge">{feedbackLabel}</span>
            <p className="contact__feedback-text">{submissionState.message}</p>
          </div>
        </div>
      ) : null}
    </div>
  )
}
