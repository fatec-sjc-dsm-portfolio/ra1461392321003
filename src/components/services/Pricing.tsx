export default function Pricing() {
    const plans = [
        {
            name: "Landing Page",
            price: "800",
            description: "Perfeito para campanhas e captação de leads",
            features: [
                "Design responsivo",
                "Até 3 seções",
                "Formulário de contato",
                "Otimização SEO básica",
                "1 revisão incluída",
                "Prazo: 7 dias"
            ],
            highlighted: false
        },
        {
            name: "Site Institucional",
            price: "1.500",
            description: "Ideal para empresas e profissionais",
            features: [
                "Design personalizado",
                "Até 5 páginas",
                "Formulário de contato",
                "Integração redes sociais",
                "Blog (opcional)",
                "Otimização SEO completa",
                "2 revisões incluídas",
                "Prazo: 15 dias"
            ],
            highlighted: true,
            badge: "Mais Popular"
        },
        {
            name: "E-commerce",
            price: "3.000",
            description: "Loja virtual completa e profissional",
            features: [
                "Design personalizado",
                "Catálogo de produtos",
                "Carrinho de compras",
                "Painel administrativo",
                "Integração com pagamento",
                "Controle de estoque",
                "Sistema de cupons",
                "Otimização SEO completa",
                "3 revisões incluídas",
                "Prazo: 30 dias"
            ],
            highlighted: false
        }
    ]

    return (
        <section id="pricing" className="education">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Planos e Preços</h2>
                    <p className="section-subtitle">Escolha o plano ideal para seu negócio</p>
                </div>

                <div className="pricing-grid">
                    {plans.map((plan, index) => (
                        <div key={index} className={`pricing-card ${plan.highlighted ? 'highlighted' : ''}`}>
                            {plan.badge && <div className="pricing-badge">{plan.badge}</div>}
                            <h3 className="pricing-name">{plan.name}</h3>
                            <div className="pricing-price">
                                <span className="currency">R$</span>
                                <span className="amount">{plan.price}</span>
                            </div>
                            <p className="pricing-description">{plan.description}</p>
                            <ul className="pricing-features">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx}>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <a href="#cta" className={`pricing-cta ${plan.highlighted ? 'btn-primary' : 'btn-secondary'}`}>
                                Contratar Agora
                            </a>
                        </div>
                    ))}
                </div>

                <div className="pricing-note">
                    <p>💡 <strong>Projetos personalizados?</strong> Entre em contato para um orçamento sob medida para suas necessidades específicas.</p>
                </div>
            </div>
        </section>
    )
}
