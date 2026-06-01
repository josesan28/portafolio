export default function ProjectTechItem({ tech }) {
  return (
    <article className="project-detail__tech-item">
      <div className="project-detail__tech-header">
        <img
          src={tech.icon}
          alt={tech.name}
          className="project-detail__tech-icon"
          loading="lazy"
        />
        <h3 className="project-detail__tech-name">{tech.name}</h3>
      </div>
      <p className="project-detail__tech-reason">{tech.reason}</p>
    </article>
  )
}
