export default function ServicesOffered() {
    const services = [
        {
            icon: "🚀",
            title: "Landing Pages",
            description: "Páginas de captura otimizadas para conversão. Perfeitas para campanhas, lançamentos e geração de leads com design moderno e responsivo.",
            features: [
                "Design responsivo e otimizado",
                "Otimização SEO integrada",
                "Formulários de captura avançados",
                "Analytics e tracking",
                "Carregamento ultra-rápido"
            ]
        },
        {
            icon: "🏢",
            title: "Sites Institucionais",
            description: "Sites corporativos elegantes que transmitem credibilidade e fortalecem a presença digital da sua empresa de forma profissional.",
            features: [
                "Design personalizado e único",
                "Sistema de gerenciamento de conteúdo",
                "Galeria multimídia",
                "Formulários de contato",
                "Integração redes sociais"
            ]
        },
        {
            icon: "🛒",
            title: "E-commerce Completo",
            description: "Lojas virtuais seguras e profissionais para vender seus produtos online com ferramentas completas de gerenciamento.",
            features: [
                "Catálogo ilimitado de produtos",
                "Carrinho de compras inteligente",
                "Integração com múltiplos pagamentos",
                "Painel administrativo completo",
                "Controle de estoque automático"
            ]
        },
        {
            icon: "✨",
            title: "Consultoria Web",
            description: "Orientação especializada para potencializar seu projeto digital. Análise de concorrentes, estratégia e melhorias de performance.",
            features: [
                "Análise de mercado e concorrência",
                "Estratégia de digital marketing",
                "Otimização de conversão",
                "Relatórios detalhados",
                "Suporte contínuo"
            ]
        }
    ]

    return (
        <section id="services-offered" className="about section-light">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Serviços Oferecidos</h2>
                    <p className="section-subtitle">Soluções web completas para crescimento do seu negócio</p>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <div key={index} className="service-card">
                            <div className="service-icon">{service.icon}</div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-description">{service.description}</p>
                            <ul className="service-features">
                                {service.features.map((feature, idx) => (
                                    <li key={idx}>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <a href="#cta" className="service-cta btn-primary">
                                Solicitar Orçamento
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
