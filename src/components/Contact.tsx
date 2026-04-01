import { useState } from "react"

// Lista de países com DDI e máscaras
const countries = [
    { code: 'BR', name: 'Brasil', dial: '+55', flag: '🇧🇷', mask: '(##) #####-####', placeholder: '(11) 99999-9999' },
    { code: 'US', name: 'Estados Unidos', dial: '+1', flag: '🇺🇸', mask: '(###) ###-####', placeholder: '(555) 123-4567' },
    { code: 'AR', name: 'Argentina', dial: '+54', flag: '🇦🇷', mask: '## ####-####', placeholder: '11 1234-5678' },
    { code: 'CL', name: 'Chile', dial: '+56', flag: '🇨🇱', mask: '# #### ####', placeholder: '9 1234 5678' },
    { code: 'CO', name: 'Colômbia', dial: '+57', flag: '🇨🇴', mask: '### ### ####', placeholder: '321 123 4567' },
    { code: 'MX', name: 'México', dial: '+52', flag: '🇲🇽', mask: '## #### ####', placeholder: '55 1234 5678' },
    { code: 'PE', name: 'Peru', dial: '+51', flag: '🇵🇪', mask: '### ### ###', placeholder: '987 654 321' },
    { code: 'UY', name: 'Uruguai', dial: '+598', flag: '🇺🇾', mask: '#### ####', placeholder: '9876 5432' },
    { code: 'PY', name: 'Paraguai', dial: '+595', flag: '🇵🇾', mask: '### ### ###', placeholder: '985 123 456' },
    { code: 'BO', name: 'Bolívia', dial: '+591', flag: '🇧🇴', mask: '#### ####', placeholder: '7123 4567' },
    { code: 'EC', name: 'Equador', dial: '+593', flag: '🇪🇨', mask: '## ### ####', placeholder: '99 123 4567' },
    { code: 'VE', name: 'Venezuela', dial: '+58', flag: '🇻🇪', mask: '###-###-####', placeholder: '412-123-4567' },
    { code: 'PT', name: 'Portugal', dial: '+351', flag: '🇵🇹', mask: '### ### ###', placeholder: '912 345 678' },
    { code: 'ES', name: 'Espanha', dial: '+34', flag: '🇪🇸', mask: '### ## ## ##', placeholder: '612 34 56 78' },
    { code: 'FR', name: 'França', dial: '+33', flag: '🇫🇷', mask: '## ## ## ## ##', placeholder: '06 12 34 56 78' },
    { code: 'DE', name: 'Alemanha', dial: '+49', flag: '🇩🇪', mask: '#### #######', placeholder: '1579 1234567' },
    { code: 'IT', name: 'Itália', dial: '+39', flag: '🇮🇹', mask: '### ### ####', placeholder: '320 123 4567' },
    { code: 'GB', name: 'Reino Unido', dial: '+44', flag: '🇬🇧', mask: '##### ######', placeholder: '07123 456789' },
    { code: 'CA', name: 'Canadá', dial: '+1', flag: '🇨🇦', mask: '(###) ###-####', placeholder: '(416) 123-4567' },
]

// Função para aplicar máscara no telefone
const applyPhoneMask = (value: string, mask: string) => {
    const cleanValue = value.replace(/\D/g, '')
    let maskedValue = ''
    let valueIndex = 0

    for (let i = 0; i < mask.length && valueIndex < cleanValue.length; i++) {
        if (mask[i] === '#') {
            maskedValue += cleanValue[valueIndex]
            valueIndex++
        } else {
            maskedValue += mask[i]
        }
    }

    return maskedValue
}

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
    })

    const [selectedCountry, setSelectedCountry] = useState(countries[0]) // Brasil como padrão
    const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false)

    const [isSubmitted, setIsSubmitted] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        try {
            const form = new FormData()
            form.append('name', formData.name)
            form.append('email', formData.email)
            form.append('phone', `${selectedCountry.dial} ${formData.phone}`)
            form.append('company', formData.company || 'Não informado')
            form.append('message', formData.message)
            form.append('_subject', `Nova mensagem de ${formData.name} - Portfolio`)
            form.append('_captcha', 'false')
            form.append('_template', 'table')

            const response = await fetch('https://formsubmit.co/daf2b75e64fb846c63068f320fa8dc94', {
                method: 'POST',
                body: form
            })

            if (response.ok) {
                setIsSubmitted(true)
                // Reset form data
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    company: "",
                    message: "",
                })
            } else {
                throw new Error('Erro ao enviar formulário')
            }
        } catch (error) {
            console.error('Erro:', error)
            alert('Erro ao enviar mensagem. Tente novamente.')
        } finally {
            setIsSubmitting(false)
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target

        if (name === 'phone') {
            // Aplica a máscara específica do país selecionado
            const maskedValue = applyPhoneMask(value, selectedCountry.mask)
            setFormData({
                ...formData,
                [name]: maskedValue,
            })
        } else {
            setFormData({
                ...formData,
                [name]: value,
            })
        }
    }

    return (
        <section id="contact" className="contact">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Contatos</h2>
                    <p className="section-subtitle">Vamos conversar sobre oportunidades e projetos!</p>
                </div>

                <div className="contact-form-container">
                    {!isSubmitted ? (
                        <form onSubmit={handleSubmit} className="contact-form">
                            {/* Todo o conteúdo do formulário existente permanece igual */}
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="name">Nome *</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="Seu nome"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">E-mail *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="seu@email.com"
                                    />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="phone">Telefone *</label>
                                    <div className="phone-input-container">
                                        <div className="country-selector">
                                            <button
                                                type="button"
                                                className="country-button"
                                                onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                                            >
                                                <span className="country-info">
                                                    <span className="country-name">{selectedCountry.name}</span>
                                                    <span className="country-dial">{selectedCountry.dial}</span>
                                                </span>
                                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <polyline points="6,9 12,15 18,9"></polyline>
                                                </svg>
                                            </button>
                                            {isCountryDropdownOpen && (
                                                <div className="country-dropdown">
                                                    {countries.map((country) => (
                                                        <button
                                                            key={country.code}
                                                            type="button"
                                                            className="country-option"
                                                            onClick={() => {
                                                                setSelectedCountry(country)
                                                                setIsCountryDropdownOpen(false)
                                                                // Limpa o campo de telefone ao trocar país
                                                                setFormData({
                                                                    ...formData,
                                                                    phone: ""
                                                                })
                                                            }}
                                                        >
                                                            <div className="country-details">
                                                                <span className="country-name">{country.name}</span>
                                                                <span className="country-dial">{country.dial}</span>
                                                            </div>
                                                        </button>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            placeholder={selectedCountry.placeholder}
                                            className="phone-input"
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="company">Empresa</label>
                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        placeholder="Nome da sua empresa"
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Mensagem</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={4}
                                    placeholder="Conte-nos mais sobre seu projeto e objetivos..."
                                />
                            </div>

                            <button type="submit" className="form-submit" disabled={isSubmitting}>
                                <span>{isSubmitting ? 'Enviando...' : 'Enviar mensagem'}</span>
                                {!isSubmitting && (
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                )}
                            </button>
                        </form>
                    ) : (
                        <div className="success-message">
                            <div className="success-icon">
                                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                    <polyline points="22,4 12,14.01 9,11.01" />
                                </svg>
                            </div>
                            <h3 className="success-title">Mensagem Enviada com Sucesso! 🎉</h3>
                            <p className="success-description">
                                Obrigada pelo seu interesse! Entrarei em contato em até 24 horas.
                            </p>
                            <button
                                onClick={() => setIsSubmitted(false)}
                                className="btn-primary"
                            >
                                Enviar nova mensagem
                            </button>

                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}
