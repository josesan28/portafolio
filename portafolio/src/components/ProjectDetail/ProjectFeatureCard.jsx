export default function ProjectFeatureCard({ feature }) {
  return (
    <article className="project-detail__feature-card">
      <div className="project-detail__feature-top">
        <span className="project-detail__feature-mark" aria-hidden="true" />
        <h3 className="project-detail__feature-title">{feature.title}</h3>
      </div>
      <p className="project-detail__feature-description">{feature.description}</p>
    </article>
  )
}
