import { useState, useEffect } from "react"
import ServicesHeader from "../../components/services/ServicesHeader"
import Footer from "../../components/Footer"
import ServicesHero from "../../components/services/ServicesHero"
import ServicesOffered from "../../components/services/ServicesOffered"
import PainPoints from "../../components/services/PainPoints"
import WhyChooseMe from "../../components/services/WhyChooseMe"
import Portfolio from "../../components/services/Portfolio"
import Process from "../../components/services/Process"

import CTASection from "../../components/services/CTASection"
import "../Home/styles.css"

export default function Services() {
  const [activeSection, setActiveSection] = useState("services-hero")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["services-hero", "services-offered", "pain-points", "why-choose", "portfolio", "process", "cta"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Intersection Observer for scroll animations
  useEffect(() => {
    const progressBar = document.createElement('div')
    progressBar.className = 'scroll-progress'
    document.body.appendChild(progressBar)

    const updateScrollProgress = () => {
      const scrollTop = window.pageYOffset
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = scrollTop / docHeight
      progressBar.style.transform = `scaleX(${scrollPercent})`
    }

    const isMobile = window.innerWidth <= 768

    const observerOptions = {
      threshold: isMobile ? 0.05 : 0.1,
      rootMargin: isMobile ? '0px 0px -50px 0px' : '0px 0px -100px 0px'
    }

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('section-animate')
          
          const animatableElements = entry.target.querySelectorAll(
            '.service-card, .benefit-card, .process-step, .testimonial-card, .portfolio-item, .section-header'
          )
          
          animatableElements.forEach((element, index) => {
            const delay = isMobile ? index * 100 : index * 150
            setTimeout(() => {
              element.classList.add('content-animate')
            }, delay)
          })
        }
      })
    }, observerOptions)

    const sections = document.querySelectorAll('section')
    sections.forEach((section) => sectionObserver.observe(section))

    window.addEventListener('scroll', updateScrollProgress, { passive: true })

    return () => {
      sections.forEach((section) => sectionObserver.unobserve(section))
      window.removeEventListener('scroll', updateScrollProgress)
      if (document.body.contains(progressBar)) {
        document.body.removeChild(progressBar)
      }
    }
  }, [])

  return (
    <div className="portfolio">
      <ServicesHeader activeSection={activeSection} />
      <main>
        <ServicesHero />
        <ServicesOffered />
        <PainPoints />
        <WhyChooseMe />
        <Portfolio />
        <Process />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
