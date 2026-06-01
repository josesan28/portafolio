import { useState } from 'react'

const initialFormState = {
  name: '',
  email: '',
  message: '',
}

export default function ContactForm() {
  const [formData, setFormData] = useState(initialFormState)

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const subject = encodeURIComponent(`Mensaje de ${formData.name}`)
    const body = encodeURIComponent(
      `Nombre: ${formData.name}\nCorreo: ${formData.email}\n\nMensaje:\n${formData.message}`
    )

    window.location.href = `mailto:san24092@uvg.edu.gt?subject=${subject}&body=${body}`
  }

  return (
    <div className="contact__form-shell">
      <form className="contact__form" onSubmit={handleSubmit}>
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
          <p className="contact__note">
            Este formulario abre tu cliente de correo con el mensaje listo
            para enviarse.
          </p>

          <button type="submit" className="contact__submit">
            Enviar mensaje
          </button>
        </div>
      </form>
    </div>
  )
}
