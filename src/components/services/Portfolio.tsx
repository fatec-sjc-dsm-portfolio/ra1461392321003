import huntImage from '../../assets/hunt.png'
import huntpilotImage from '../../assets/huntpilot.png'
import atlantisImage from '../../assets/atlantis.png'

export default function Portfolio() {
    const portfolioItems = [
        {
            title: "Hunt Sales",
            description: "Site corporativo para empresa de IA",
            image: huntImage,
            category: "Site Institucional",
            link: "https://huntsales.com.br/"
        },
        {
            title: "Hunt Pilot",
            description: "Landing page para sistema de IA",
            image: huntpilotImage,
            category: "Landing Page",
            link: "https://huntsales.com.br/huntpilot/"
        },
        {
            title: "Atlantis",
            description: "Sistema completo de gestão",
            image: atlantisImage,
            category: "Sistema Web",
            link: "https://github.com/Ana-Laura-Moratelli/atlantis"
        }
    ]

    return (
        <section id="portfolio" className="projects section-dark">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Portfólio de Projetos</h2>
                    <p className="section-subtitle">Conheça alguns trabalhos realizados</p>
                </div>

                <div className="portfolio-grid">
                    {portfolioItems.map((item, index) => (
                        <div key={index} className="portfolio-item">
                            <div className="portfolio-image">
                                <img src={item.image} alt={item.title} />
                                <div className="portfolio-overlay">
                                    <a
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="portfolio-link"
                                    >
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                            <polyline points="15,3 21,3 21,9" />
                                            <line x1="10" y1="14" x2="21" y2="3" />
                                        </svg>
                                        Ver Projeto
                                    </a>
                                </div>
                            </div>
                            <div className="portfolio-content">
                                <span className="portfolio-category">{item.category}</span>
                                <h3 className="portfolio-title">{item.title}</h3>
                                <p className="portfolio-description">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
