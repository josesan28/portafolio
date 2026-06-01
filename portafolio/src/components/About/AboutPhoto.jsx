export default function AboutPhoto() {
  return (
    <div className="about__photo-wrapper">
      <div className="about__photo-frame">
        {/*
          Aquí reemplazo la foto por la mía.
        */}
        <img
          src="/foto-perfil.jpg"
          alt="Mi foto"
          className="about__photo"
          onError={(e) => {
            e.target.style.display = 'none'
            e.target.nextSibling.style.display = 'flex'
          }}
        />
        <div className="about__photo-placeholder" style={{ display: 'none' }}>
          <span>Mi foto aquí</span>
        </div>
      </div>
      <div className="about__photo-decoration" aria-hidden="true" />
    </div>
  )
}
