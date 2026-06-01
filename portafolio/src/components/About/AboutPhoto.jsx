export default function AboutPhoto() {
  return (
    <div className="about__photo-wrapper">
      <div className="about__photo-frame">
        <img
          src="/yo.jpeg"
          alt="Mi foto"
          className="about__photo"
          loading="eager"
          onError={(event) => {
            event.target.style.display = 'none'
            event.target.nextSibling.style.display = 'flex'
          }}
        />
        <div className="about__photo-placeholder" style={{ display: 'none' }}>
          <span>Mi foto aqui</span>
        </div>
      </div>
      <div className="about__photo-decoration" aria-hidden="true" />
    </div>
  )
}
