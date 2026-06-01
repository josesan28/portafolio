export default function AboutSkills({ skills }) {
  return (
    <div className="about__skills">
      {skills.map((skill, index) => (
        <span key={skill} className="about__badge" style={{ '--badge-index': index }}>
          {skill}
        </span>
      ))}
    </div>
  )
}
