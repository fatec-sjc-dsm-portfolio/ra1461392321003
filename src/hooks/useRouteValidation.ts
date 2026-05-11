import { useState, useEffect } from 'react'
import { getNormalizedPathname } from '../utils/pathname'

export function useRouteValidation() {
  const [isValidRoute, setIsValidRoute] = useState(true)
  const [currentPath, setCurrentPath] = useState('')

  useEffect(() => {
    const checkRoute = () => {
      const pathname = getNormalizedPathname(window.location.pathname)
      const hash = window.location.hash
      const fullPath = pathname + hash
      setCurrentPath(fullPath)
      
      // SPA: sempre válido
      setIsValidRoute(true)
    }

    // Verifica na montagem
    checkRoute()

    // Escuta mudanças na URL
    const handleLocationChange = () => {
      checkRoute()
    }

    window.addEventListener('popstate', handleLocationChange)
    window.addEventListener('hashchange', handleLocationChange)

    return () => {
      window.removeEventListener('popstate', handleLocationChange)
      window.removeEventListener('hashchange', handleLocationChange)
    }
  }, [currentPath])

  return { isValidRoute, currentPath }
}
