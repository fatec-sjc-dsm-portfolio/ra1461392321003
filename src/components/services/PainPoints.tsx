export default function PainPoints() {
    const painPoints = [
        {
            icon: "⏱️",
            problem: "Projetos Atrasam",
            pain: "Outras empresas costumam não cumprir prazos, deixando você esperando meses por um site que deveria estar pronto há tempo.",
            solution: "Eu trabalho com cronogramas realistas e cumpro prazos"
        },
        {
            icon: "💰",
            problem: "Cobram Caro e Entregam Pouco",
            pain: "Muitas agências cobram valores altos por sites genéricos, sem personalização ou otimização real para seu negócio.",
            solution: "Preços justos e soluções personalizadas para seu mercado"
        },
        {
            icon: "🚫",
            problem: "Sem Suporte Depois",
            pain: "Após entregar o site, desaparecem. Qualquer problema ou dúvida fica sem solução.",
            solution: "Acompanhamento contínuo e suporte disponível"
        },
        {
            icon: "📱",
            problem: "Sites Desatualizados",
            pain: "Muitos sites não funcionam bem em celular, carregam lentamente ou não aparecem no Google.",
            solution: "Sites rápidos, responsivos e otimizados para SEO"
        },
        {
            icon: "🎯",
            problem: "Sem Resultado Real",
            pain: "Você investe mas o site não gera leads, não converte visitantes em clientes, é apenas uma página bonita.",
            solution: "Foco em conversão e resultados para seu negócio"
        },
        {
            icon: "📊",
            problem: "Sem Análise de Dados",
            pain: "Não sabem quantas pessoas visitam, de onde vêm, o que fazem no site. Sem dados, sem decisões inteligentes.",
            solution: "Integração com analytics e relatórios de performance"
        }
    ]

    return (
        <section id="pain-points" className="pain-points section-dark">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Desafios do Mercado Web</h2>
                    <p className="section-subtitle">Conheça os obstáculos que suas empresas concorrentes enfrentam</p>
                </div>

                <div className="pain-points-grid">
                    {painPoints.map((point, index) => (
                        <div key={index} className="pain-point-card">
                            <div className="pain-point-icon">{point.icon}</div>
                            <div className="pain-point-content">
                                <h3 className="pain-point-problem">{point.problem}</h3>
                                <p className="pain-point-pain">{point.pain}</p>
                                <div className="pain-point-solution">
                                    <span className="solution-label">✓</span>
                                    <span className="solution-text">{point.solution}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
