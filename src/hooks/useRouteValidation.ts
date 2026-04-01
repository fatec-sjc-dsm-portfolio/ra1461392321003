import { useState, useEffect } from 'react'
import { getNormalizedPathname } from '../utils/pathname'

// Lista de rotas válidas
const validRoutes = [
  '/',
  '/home',
  '/servicos',
  '/#about',
  '/#experience', 
  '/#projects',
  '/#skills',
  '/#education',
  '/#contact'
]

export function useRouteValidation() {
  const [isValidRoute, setIsValidRoute] = useState(true)
  const [currentPath, setCurrentPath] = useState('')

  useEffect(() => {
    const checkRoute = () => {
      const pathname = getNormalizedPathname(window.location.pathname)
      const hash = window.location.hash
      const fullPath = pathname + hash
      setCurrentPath(fullPath)
      
      // Se é a raiz ou tem apenas hash, é válido
      if (pathname === '/' || pathname === '') {
        setIsValidRoute(true)
        return
      }
      
      // Verifica se é uma rota válida
      const isValid = validRoutes.some(route => {
        if (route === '/') return pathname === '/'
        if (route === '/home') return pathname === '/home'
        if (route.startsWith('/#')) {
          // Para rotas com hash, aceita tanto /#section quanto /section
          const section = route.substring(2) // remove /#
          return hash === `#${section}` || pathname === `/${section}`
        }
        return pathname === route
      })
      
      setIsValidRoute(isValid)
    }

    // Verifica na montagem
    checkRoute()

    // Escuta mudanças na URL
    const handleLocationChange = () => {
      checkRoute()
    }

    window.addEventListener('popstate', handleLocationChange)
    window.addEventListener('hashchange', handleLocationChange)

    // Observa mudanças no pathname (para SPAs)
    const observer = new MutationObserver(() => {
      if (getNormalizedPathname(window.location.pathname) !== currentPath.split('#')[0]) {
        checkRoute()
      }
    })

    observer.observe(document.body, { 
      childList: true, 
      subtree: true 
    })

    return () => {
      window.removeEventListener('popstate', handleLocationChange)
      window.removeEventListener('hashchange', handleLocationChange)
      observer.disconnect()
    }
  }, [currentPath])

  return { isValidRoute, currentPath }
}
