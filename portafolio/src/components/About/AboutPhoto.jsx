export default function AboutPhoto() {
  return (
    <div className="about__photo-wrapper">
      <div className="about__photo-frame">
        <div className="about__photo-glow" aria-hidden="true" />
        <img
          src="/yo.jpeg"
          alt="Mi foto"
          className="about__photo"
          loading="eager"
          onError={(event) => {
            const placeholder = event.currentTarget.parentElement?.querySelector('.about__photo-placeholder')
            event.currentTarget.style.display = 'none'

            if (placeholder) {
              placeholder.style.display = 'flex'
            }
          }}
        />
        <div className="about__photo-sheen" aria-hidden="true" />
        <div className="about__photo-placeholder" style={{ display: 'none' }}>
          <span>Mi foto aquí</span>
        </div>
      </div>
      <div className="about__photo-decoration" aria-hidden="true" />
    </div>
  )
}
