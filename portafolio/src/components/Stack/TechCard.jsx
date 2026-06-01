export default function TechCard({ tech }) {
  return (
    <article className="stack__card">
      <div className="stack__card-top">
        <img
          src={tech.icon}
          alt={tech.name}
          className="stack__icon"
          loading="lazy"
        />
        <span className="stack__category">{tech.category}</span>
      </div>

      <h3 className="stack__name">{tech.name}</h3>

      <p className="stack__reason">{tech.reason}</p>
    </article>
  )
}
