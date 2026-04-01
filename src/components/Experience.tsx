export default function Experience() {
  const experiences = [
    {
      title: "Desenvolvedora Full Stack",
      company: "Hunt Sales",
      period: "Fevereiro 2025 até o momento",
      description:
        "Como Desenvolvedora Full Stack na Hunt Sales, sou responsável pelo desenvolvimento e manutenção do nosso sistema de atendimento, com foco em tornar o atendimento mais eficiente e inteligente para o usuário. No dia a dia, atuo na configuração da IA de atendimento, integrações com APIs e criação de automações personalizadas, além de desenvolver funcionalidades no sistema e garantir sua estabilidade por meio de testes contínuos.",
      icon: "💻",
    },
    {
      title: "Desenvolvedora Front-end",
      company: "Coyô Software",
      period: "Agosto 2024 até o momento",
      description:
        "Como Desenvolvedora Front-end, sou responsável por criar interfaces de usuário intuitivas e responsivas, assegurando uma experiência digital eficiente. Minhas responsabilidades incluem o desenvolvimento de aplicações web com foco em usabilidade e performance, a criação de layouts adaptáveis e acessíveis, e a implementação de melhores práticas de design UX, sempre com atenção aos detalhes e à jornada do usuário final.",
      icon: "🎨",
    },
    {
      title: "Suporte Técnico / Analista de Projetos",
      company: "Micro Assist Informática",
      period: "Janeiro 2024 até Agosto 2024",
      description:
        "Como Suporte Técnico, desempenhei um papel fundamental na gestão de TI para empresas. Minhas responsabilidades incluíram a administração de servidores, implementação e manutenção de serviços de virtualização e gestão de serviços em nuvem. Como Analista de Projetos, realizei reuniões com clientes para entender suas necessidades e garantir que nossos produtos atendessem às expectativas, além de realizar a documentação dos projetos e dos novos clientes. Além disso, trabalhei no desenvolvimento de novos produtos, atuando como Desenvolvedora Front-end.",
      icon: "🔧",
    },
    {
      title: "Técnico em Eletrônica",
      company: "Colégios Univap",
      period: "Março 2021 até Junho 2022",
      description:
        "Durante meu estágio em eletrônica, tive a oportunidade de trabalhar em projetos de desenvolvimento de circuitos eletrônicos. Aprendi técnicas de soldagem e teste de componentes eletrônicos, além de programar microcontroladores utilizando linguagem C++.",
      icon: "⚡",
    },
  ]

  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Experiência Profissional</h2>
          <p className="section-subtitle">Minha trajetória profissional e principais conquistas</p>
        </div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker">
                <span className="timeline-icon">{exp.icon}</span>
              </div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3 className="timeline-title">{exp.title}</h3>
                  <span className="timeline-company">{exp.company}</span>
                  <span className="timeline-period">{exp.period}</span>
                </div>
                <p className="timeline-description">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
