import './Contact.css'
import ContactForm from '../../../components/Contact/ContactForm'
import ContactLinks from '../../../components/Contact/ContactLinks'

const contactLinks = [
  {
    href: 'https://github.com/josesan28',
    label: 'GitHub',
    detail: 'Código, proyectos y trabajo en progreso.',
    external: true,
    icon: '/tech/github.svg',
  },
  {
    label: 'Correo',
    detail: 'san24092@uvg.edu.gt',
    icon: '/tech/mail.svg',
  },
  {
    href: '/cv-jose-sanchez-2026.pdf',
    label: 'Currículum',
    detail: 'Abrir PDF y descargarlo si lo necesitas.',
    external: true,
    icon: '/tech/cv.svg',
  },
]

export default function Contact() {
  return (
    <section className="contact" id="contact" aria-label="Contacto">
      <header className="contact__header">
        <span className="contact__eyebrow">Contacto</span>
        <h2 className="contact__title">Conversemos</h2>
        <p className="contact__subtitle">
          Estoy abierto a escuchar propuestas, colaboraciones o incluso una
          crítica constructiva sobre mi trabajo.
        </p>
      </header>

      <div className="contact__layout">
        <ContactLinks links={contactLinks} />
        <ContactForm />
      </div>
    </section>
  )
}
