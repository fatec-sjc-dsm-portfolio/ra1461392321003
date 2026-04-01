"use client"

import { useState } from "react"
import ThemeToggle from "./ThemeToggle"

interface HeaderProps {
  activeSection: string
}

export default function Header({ activeSection }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { id: "about", label: "Sobre Mim" },
    { id: "experience", label: "Experiência" },
    { id: "projects", label: "Projetos" },
    { id: "skills", label: "Habilidades" },
    { id: "education", label: "Formação" },
    { id: "contact", label: "Contato" },
  ]

  const scrollToSection = (sectionId: string) => {
    if (sectionId === "home") {
      // Rola para o topo da página
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <span 
              onClick={() => scrollToSection("home")}
              style={{ cursor: "pointer" }}
            >
              Ana Laura
            </span>
          </div>

          <nav className="desktop-nav">
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

          <div className="header-actions">
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
