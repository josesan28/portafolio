export default function AboutTimelineItem({ date, title, description, current = false }) {
  return (
    <div className={`about__timeline-item ${current ? 'about__timeline-item--current' : ''}`}>
      <span className="about__timeline-date">{date}</span>
      <div className="about__timeline-body">
        <strong>{title}</strong>
        <p>{description}</p>
      </div>
    </div>
  )
}
