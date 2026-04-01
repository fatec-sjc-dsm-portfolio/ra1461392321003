export default function WhyChooseMe() {
    const benefits = [
        {
            icon: "⚡",
            title: "Desenvolvimento Ágil",
            description: "Entregas rápidas sem comprometer a qualidade. Seu projeto no ar em tempo recorde."
        },
        {
            icon: "💎",
            title: "Código de Qualidade",
            description: "Código limpo, organizado e seguindo as melhores práticas do mercado."
        },
        {
            icon: "📱",
            title: "Design Responsivo",
            description: "Sites que funcionam perfeitamente em qualquer dispositivo - celular, tablet ou desktop."
        },
        {
            icon: "🎨",
            title: "Design Moderno",
            description: "Interfaces bonitas, intuitivas e alinhadas com as últimas tendências de design."
        },
        {
            icon: "🔍",
            title: "SEO Otimizado",
            description: "Sites otimizados para aparecer nas primeiras posições do Google."
        },
        {
            icon: "🚀",
            title: "Performance Máxima",
            description: "Carregamento ultra-rápido para melhor experiência do usuário e conversão."
        },
        {
            icon: "💬",
            title: "Comunicação Clara",
            description: "Você estará sempre informado sobre o progresso do seu projeto."
        },
        {
            icon: "🔒",
            title: "Segurança",
            description: "Sites seguros e protegidos contra vulnerabilidades comuns."
        }
    ]

    return (
        <section id="why-choose" className="skills section-light">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Por que me escolher?</h2>
                    <p className="section-subtitle">Diferenciais que fazem a diferença no seu projeto</p>
                </div>

                <div className="benefits-grid">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="benefit-card">
                            <div className="benefit-icon">{benefit.icon}</div>
                            <h3 className="benefit-title">{benefit.title}</h3>
                            <p className="benefit-description">{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
