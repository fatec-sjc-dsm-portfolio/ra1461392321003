export default function Education() {
  const education = [
    {
      title: "Desenvolvimento de Software Multiplataforma",
      institution: "Fatec Prof. Jessen Vidal",
      period: "Concluído em agosto de 2026",
      icon: "🎓",
    },
    {
      title: "Ensino Médio e Técnico em Eletrônica",
      institution: "Colégios Univap",
      period: "Concluído em 2022",
      icon: "🎓",
    },
    {
      title: "Curso de Inglês Intermediário",
      institution: "ELEC School",
      period: "Concluído em 2021",
      icon: "🎓",
    },
  ]

  return (
    <section id="education" className="education">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Formação Acadêmica</h2>
          <p className="section-subtitle">Minha jornada educacional e qualificações</p>
        </div>

        <div className="education-grid">
          {education.map((edu, index) => (
            <div key={index} className="education-card">
              <div className="education-icon">
                <span>{edu.icon}</span>
              </div>
              <div className="education-content">
                <h3 className="education-title">{edu.title}</h3>
                <p className="education-institution">{edu.institution}</p>
                <span className="education-period">{edu.period}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
