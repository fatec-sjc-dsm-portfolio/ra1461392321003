const hobbies = [
    {
        emoji: "🐶",
        title: "Animais & Pets",
        description: "Tenho carinho especial por animais e gosto de passar tempo com pets, valorizando momentos de conexão, cuidado e companhia.",
    },
    {
        emoji: "🏐",
        title: "Futevôlei & Vôlei",
        description: "Gosto de esportes que envolvem energia, estratégia e trabalho em equipe, principalmente futevôlei e vôlei.",
    },
    {
        emoji: "✈️",
        title: "Viajar & Conhecer Novos Lugares",
        description: "Adoro conhecer novos lugares, culturas e experiências, explorando ambientes que trazem inspiração e novas perspectivas.",
    },
    {
        emoji: "📚",
        title: "Estudo & Aprendizado Contínuo",
        description: "Tenho interesse constante em aprender coisas novas, principalmente sobre tecnologia, inovação e desenvolvimento pessoal.",
    },
]

export default function Hobbies() {
    return (
        <section id="hobbies" className="hobbies">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Hobbies & Interesses</h2>
                    <p className="section-subtitle">Além do código, o que move minha energia e inspira minha criatividade</p>
                </div>

                <div className="hobbies-grid">
                    {hobbies.map((hobby) => (
                        <div key={hobby.title} className="hobby-card">
                            <div className="hobby-emoji">{hobby.emoji}</div>
                            <h3 className="hobby-title">{hobby.title}</h3>
                            <p className="hobby-description">{hobby.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
