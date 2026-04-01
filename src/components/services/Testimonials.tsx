export default function Testimonials() {
    const testimonials = [
        {
            name: "Hunt Sales",
            role: "Empresa de IA",
            content: "Trabalho excepcional! A Ana Laura desenvolveu nosso site e landing page com muita qualidade e atenção aos detalhes. O resultado superou nossas expectativas.",
            avatar: "🏢"
        },
        {
            name: "Cliente Satisfeito",
            role: "Empreendedor",
            content: "Profissional dedicada e comprometida. Entrega rápida, comunicação clara e um site lindo que ajudou muito a impulsionar meu negócio online.",
            avatar: "👨‍💼"
        },
        {
            name: "Projeto Acadêmico",
            role: "FATEC",
            content: "Excelente desenvolvedora! Trabalhou em diversos projetos complexos com nossa equipe, sempre entregando código de qualidade e com ótima organização.",
            avatar: "🎓"
        }
    ]

    return (
        <section id="testimonials" className="about">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Depoimentos</h2>
                    <p className="section-subtitle">O que meus clientes dizem sobre o trabalho</p>
                </div>

                <div className="testimonials-grid">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="testimonial-card">
                            <div className="testimonial-content">
                                <div className="testimonial-quote">"</div>
                                <p className="testimonial-text">{testimonial.content}</p>
                            </div>
                            <div className="testimonial-author">
                                <div className="author-avatar">{testimonial.avatar}</div>
                                <div className="author-info">
                                    <h4 className="author-name">{testimonial.name}</h4>
                                    <p className="author-role">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
