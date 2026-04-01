export default function Skills() {
    const hardSkills = [
        // Front-end
        { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
        { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
        { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
        { name: "React Native", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
        { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
        { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" },

        // Backend
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
        { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg" },

        // Database
        { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
        { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
        { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg" },

        // Tools
        { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
        { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
        { name: "Vite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" },
        { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
        { name: "Webflow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/webflow/webflow-original.svg" },

        // Cloud & Deploy
        { name: "Vercel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg" },
        { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg" },

        // Automation
        { name: "N8N", icon: "https://docs.n8n.io/_images/n8n-docs-icon.svg" },
        { name: "Zapier", icon: "https://cdn.worldvectorlogo.com/logos/zapier.svg" },
    ]

    const softSkills = [
        { name: "Trabalho em equipe", icon: "🤝" },
        { name: "Organização", icon: "📋" },
        { name: "Proatividade", icon: "🚀" },
        { name: "Planejamento", icon: "📅" },
        { name: "Colaboração", icon: "🤲" },
        { name: "Comunicação", icon: "💬" },
        { name: "Resolução de Problemas", icon: "🧩" },
        { name: "Criatividade", icon: "💡" },
        { name: "Adaptabilidade", icon: "🔄" },
        { name: "Liderança", icon: "👑" },
        { name: "Foco em Resultados", icon: "🎯" },
        { name: "Gestão de Tempo", icon: "⏰" },
    ]

    return (
        <section id="skills" className="skills">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Habilidades</h2>
                    <p className="section-subtitle">Tecnologias e competências que domino</p>
                </div>

                <div className="skills-content">
                    <div className="hard-skills">
                        <h3 className="skills-subtitle">Tecnologias</h3>
                        <div className="tech-grid">
                            {hardSkills.map((skill, index) => (
                                <div key={index} className="tech-card">
                                    <div className="tech-icon">
                                        <img
                                            src={skill.icon}
                                            alt={skill.name}
                                            width="40"
                                            height="40"
                                            style={{ objectFit: 'contain' }}
                                        />
                                    </div>
                                    <span className="tech-name">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="soft-skills">
                        <h3 className="skills-subtitle">Competências Pessoais</h3>
                        <div className="soft-skills-grid">
                            {softSkills.map((skill, index) => (
                                <div key={index} className="soft-skill-card">
                                    <div className="soft-skill-icon">{skill.icon}</div>
                                    <span className="soft-skill-name">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
