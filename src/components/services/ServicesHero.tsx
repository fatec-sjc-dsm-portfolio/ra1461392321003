export default function ServicesHero() {
    return (
        <section id="services-hero" className="hero section-dark">
            <div className="container">
                <div className="hero-content">
                    <div className="hero-text">
                        <div className="hero-badge">
                            <span>💼 Serviços Profissionais</span>
                        </div>
                        <h1 className="hero-title">Transforme Suas Ideias em Sites Incríveis</h1>
                        <h2 className="hero-subtitle">Desenvolvimento Web Profissional e Personalizado</h2>
                        <p className="hero-description">
                            Crio sites modernos, responsivos e otimizados que ajudam seu negócio a crescer online. 
                            Landing pages de alta conversão, sites institucionais elegantes e e-commerces completos 
                            desenvolvidos com as melhores tecnologias do mercado.
                        </p>
                        <div className="hero-actions">
                              <button className="btn-primary" >
                                Solicitar Orçamento
                            </button>
                        </div>
                    </div>
                    <div className="hero-visual">
                        <div className="visual-element">
                            <svg width="100%" height="100%" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                                {/* Browser window frame */}
                                <rect x="40" y="30" width="320" height="280" rx="12" stroke="var(--accent-primary)" strokeWidth="2" fill="rgba(102, 126, 234, 0.05)" className="browser-frame" />
                                
                                {/* Browser header */}
                                <rect x="40" y="30" width="320" height="40" rx="12" fill="rgba(102, 126, 234, 0.1)" />
                                <circle cx="60" cy="50" r="4" fill="var(--accent-primary)" opacity="0.6" />
                                <circle cx="75" cy="50" r="4" fill="var(--accent-primary)" opacity="0.6" />
                                <circle cx="90" cy="50" r="4" fill="var(--accent-primary)" opacity="0.6" />
                                
                                {/* Code lines in browser */}
                                <line x1="60" y1="85" x2="150" y2="85" stroke="var(--accent-primary)" strokeWidth="2" opacity="0.8" className="code-line-1" />
                                <line x1="60" y1="105" x2="200" y2="105" stroke="var(--accent-secondary)" strokeWidth="2" opacity="0.6" className="code-line-2" />
                                <line x1="60" y1="125" x2="180" y2="125" stroke="var(--accent-primary)" strokeWidth="2" opacity="0.7" className="code-line-3" />
                                <line x1="60" y1="145" x2="160" y2="145" stroke="var(--accent-secondary)" strokeWidth="2" opacity="0.6" className="code-line-4" />
                                <line x1="60" y1="165" x2="190" y2="165" stroke="var(--accent-primary)" strokeWidth="2" opacity="0.7" className="code-line-5" />
                                <line x1="60" y1="185" x2="170" y2="185" stroke="var(--accent-secondary)" strokeWidth="2" opacity="0.6" className="code-line-6" />
                                <line x1="60" y1="205" x2="210" y2="205" stroke="var(--accent-primary)" strokeWidth="2" opacity="0.8" className="code-line-7" />
                                <line x1="60" y1="225" x2="155" y2="225" stroke="var(--accent-secondary)" strokeWidth="2" opacity="0.6" className="code-line-8" />
                                <line x1="60" y1="245" x2="185" y2="245" stroke="var(--accent-primary)" strokeWidth="2" opacity="0.7" className="code-line-9" />
                                
                                {/* Decorative floating elements */}
                                <circle cx="320" cy="120" r="25" fill="none" stroke="var(--accent-primary)" strokeWidth="2" opacity="0.5" className="float-circle" />
                                <circle cx="320" cy="120" r="18" fill="none" stroke="var(--accent-secondary)" strokeWidth="2" opacity="0.3" className="float-circle-inner" />
                                
                                <rect x="280" y="260" width="60" height="40" rx="6" fill="none" stroke="var(--accent-primary)" strokeWidth="2" opacity="0.5" className="float-rect" />
                                
                                {/* Animated dot indicator */}
                                <circle cx="340" cy="70" r="4" fill="var(--accent-primary)" opacity="0.8" className="pulse-dot" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
