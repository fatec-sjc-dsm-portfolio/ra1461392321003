"use client"

import { useState } from "react"
import ThemeToggle from "../ThemeToggle"
import logoSvg from "../../assets/logo.svg"

interface ServicesHeaderProps {
  activeSection: string
}

export default function ServicesHeader({ activeSection }: ServicesHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { id: "services-offered", label: "Serviços" },
    { id: "pain-points", label: "Desafios" },
    { id: "why-choose", label: "Diferenciais" },
    { id: "portfolio", label: "Portfólio" },
    { id: "process", label: "Como Funciona" },
    { id: "cta", label: "Contato" },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="services-header">
      <div className="container">
        <div className="services-header-content">
          <div className="services-logo">
            <img 
              src={logoSvg}
              alt="Ana Laura - Logo"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="logo-image"
            />
          </div>

          <nav className="services-desktop-nav">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`nav-link ${activeSection === item.id ? "active" : ""}`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="services-header-actions">
            <ThemeToggle />
            <button className="mobile-menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>

      <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
        <div className="mobile-menu-content">
          <button className="close-menu" onClick={() => setIsMenuOpen(false)} aria-label="Close menu">
            ×
          </button>
          <nav className="mobile-nav">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`mobile-nav-link ${activeSection === item.id ? "active" : ""}`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}
