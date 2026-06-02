import { isMonochromeIcon } from '../../utils/isMonochromeIcon'

export default function ContactLinkCard({ link }) {
  return (
    <a
      href={link.href}
      className="contact__link-card"
      target={link.external ? '_blank' : undefined}
      rel={link.external ? 'noopener noreferrer' : undefined}
      download={link.download}
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
      <span className="contact__link-arrow" aria-hidden="true">
        &rarr;
      </span>
    </a>
  )
}
