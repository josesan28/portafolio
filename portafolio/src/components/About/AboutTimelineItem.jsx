export default function AboutTimelineItem({ date, title, description, current = false, index = 0 }) {
  return (
    <div
      className={`about__timeline-item ${current ? 'about__timeline-item--current' : ''}`}
      style={{ '--timeline-index': index }}
    >
      <span className="about__timeline-date">{date}</span>
      <div className="about__timeline-body">
        <strong>{title}</strong>
        <p>{description}</p>
      </div>
    </div>
  )
}
