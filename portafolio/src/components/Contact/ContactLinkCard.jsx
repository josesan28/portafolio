import { isMonochromeIcon } from '../../utils/isMonochromeIcon'

export default function ContactLinkCard({ link }) {
  const isInteractive = Boolean(link.href)
  const Component = isInteractive ? 'a' : 'div'
  const interactiveProps = isInteractive
    ? {
        href: link.href,
        target: link.external ? '_blank' : undefined,
        rel: link.external ? 'noopener noreferrer' : undefined,
        download: link.download,
      }
    : {}

  return (
    <Component
      className={`contact__link-card ${isInteractive ? '' : 'contact__link-card--static'}`}
      {...interactiveProps}
    >
      <span className="contact__link-mark" aria-hidden="true">
        <img
          className={`contact__link-icon ${isMonochromeIcon(link.icon) ? 'theme-asset--monochrome' : ''}`}
          src={link.icon}
          alt=""
          aria-hidden="true"
        />
      </span>
      <span className="contact__link-copy">
        <strong>{link.label}</strong>
        <span>{link.detail}</span>
      </span>
      {isInteractive ? (
        <span className="contact__link-arrow" aria-hidden="true">
          &rarr;
        </span>
      ) : null}
    </Component>
  )
}
