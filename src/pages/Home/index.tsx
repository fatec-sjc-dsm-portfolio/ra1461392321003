import { useState, useEffect } from "react"
import Header from "../../components/Header"
import Hero from "../../components/Hero"
import About from "../../components/About"
import Experience from "../../components/Experience"
import Projects from "../../components/Projects"
import Skills from "../../components/Skills"
import Education from "../../components/Education"
import Contact from "../../components/Contact"
import Footer from "../../components/Footer"
import "./styles.css"

export default function Home() {
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "experience", "projects", "skills", "education", "contact"]
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
    // Add scroll progress bar
    const progressBar = document.createElement('div')
    progressBar.className = 'scroll-progress'
    document.body.appendChild(progressBar)

    const updateScrollProgress = () => {
      const scrollTop = window.pageYOffset
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = scrollTop / docHeight
      progressBar.style.transform = `scaleX(${scrollPercent})`
    }

    // Detect if we're on mobile
    const isMobile = window.innerWidth <= 768

    const observerOptions = {
      threshold: isMobile ? 0.05 : 0.1, // Lower threshold for mobile
      rootMargin: isMobile ? '0px 0px -50px 0px' : '0px 0px -100px 0px' // Less aggressive rootMargin for mobile
    }

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('section-animate')
          
          // Animate content within sections with staggered delays
          const animatableElements = entry.target.querySelectorAll(
            '.about-content > *, .timeline-item, .project-card, .tech-card, .soft-skill-card, .education-card, .contact-card, .contact-form, .section-header, .highlight-item'
          )
          
          animatableElements.forEach((element, index) => {
            const delay = isMobile ? index * 100 : index * 150 // Faster animations on mobile
            setTimeout(() => {
              element.classList.add('content-animate')
              
              // Add special effects for specific elements
              if (element.classList.contains('section-title')) {
                element.classList.add('text-reveal', 'active')
              }
              if (element.classList.contains('highlight-number')) {
                element.classList.add('count-up', 'active')
                animateCountUp(element)
              }
            }, delay)
          })
        }
      })
    }, observerOptions)

    const contentObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('content-animate', 'active')
          
          // Add floating animation to hero image
          if (entry.target.classList.contains('image-container')) {
            entry.target.classList.add('float-element')
          }
        }
      })
    }, { 
      threshold: isMobile ? 0.05 : 0.1, 
      rootMargin: isMobile ? '0px 0px -25px 0px' : '0px 0px -50px 0px' 
    })

    // Count-up animation function
    const animateCountUp = (element: Element) => {
      const target = parseInt(element.textContent?.replace(/\D/g, '') || '0')
      const duration = 2000
      const stepTime = 50
      const steps = duration / stepTime
      const increment = target / steps
      let current = 0

      const timer = setInterval(() => {
        current += increment
        if (current >= target) {
          if (element.textContent) {
            element.textContent = element.textContent.replace(/\d+/, target.toString())
          }
          clearInterval(timer)
        } else {
          if (element.textContent) {
            element.textContent = element.textContent.replace(/\d+/, Math.floor(current).toString())
          }
        }
      }, stepTime)
    }

    // Parallax effect for scroll
    const handleParallax = () => {
      const scrolled = window.pageYOffset
      const parallaxElements = document.querySelectorAll('.parallax-bg')
      
      parallaxElements.forEach((element) => {
        const speed = 0.5
        const htmlElement = element as HTMLElement
        htmlElement.style.transform = `translateY(${scrolled * speed}px)`
      })
      
      updateScrollProgress()
    }

    // Observe sections
    const sections = document.querySelectorAll('.about, .experience, .projects, .skills, .education, .contact')
    sections.forEach((section) => sectionObserver.observe(section))

    // Observe individual content elements for more granular control
    const contentElements = document.querySelectorAll(
      '.section-header, .hero-actions, .form-group, .image-container, .social-link, .btn-primary, .btn-secondary'
    )
    contentElements.forEach((element) => contentObserver.observe(element))

    // Add scroll event listeners
    window.addEventListener('scroll', handleParallax, { passive: true })
    window.addEventListener('scroll', updateScrollProgress, { passive: true })

    // Fallback: Force animations after 2 seconds for mobile compatibility
    const fallbackTimeout = setTimeout(() => {
      if (isMobile) {
        const allSections = document.querySelectorAll('.about, .experience, .projects, .skills, .education, .contact')
        allSections.forEach((section) => {
          if (!section.classList.contains('section-animate')) {
            section.classList.add('section-animate')
            
            const animatableElements = section.querySelectorAll(
              '.about-content > *, .timeline-item, .project-card, .tech-card, .soft-skill-card, .education-card, .contact-card, .contact-form, .section-header, .highlight-item'
            )
            
            animatableElements.forEach((element, index) => {
              setTimeout(() => {
                element.classList.add('content-animate')
              }, index * 50) // Fast stagger for fallback
            })
          }
        })
      }
    }, 2000)

    return () => {
      clearTimeout(fallbackTimeout)
      sections.forEach((section) => sectionObserver.unobserve(section))
      contentElements.forEach((element) => contentObserver.unobserve(element))
      window.removeEventListener('scroll', handleParallax)
      window.removeEventListener('scroll', updateScrollProgress)
      if (document.body.contains(progressBar)) {
        document.body.removeChild(progressBar)
      }
    }
  }, [])

  return (
    <div className="portfolio">
      <Header activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
