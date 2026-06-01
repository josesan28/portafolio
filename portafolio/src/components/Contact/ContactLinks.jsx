import ContactLinkCard from './ContactLinkCard'

export default function ContactLinks({ links }) {
  return (
    <aside className="contact__aside">
      <span className="contact__aside-label">Canales directos</span>

      <div className="contact__link-list">
        {links.map((link) => (
          <ContactLinkCard key={link.label} link={link} />
        ))}
      </div>
    </aside>
  )
}
