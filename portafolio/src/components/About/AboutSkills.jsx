export default function AboutSkills({ skills }) {
  return (
    <div className="about__skills">
      {skills.map((skill) => (
        <span key={skill} className="about__badge">
          {skill}
        </span>
      ))}
    </div>
  )
}
