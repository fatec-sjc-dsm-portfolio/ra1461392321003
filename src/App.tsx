import { useEffect } from 'react';
import Home from './pages/Home';
import Services from './pages/Services';
import NotFound from './components/NotFound';
import { ThemeProvider } from './context/ThemeContext';
import { useRouteValidation } from './hooks';
import { getNormalizedPathname } from './utils/pathname';

function App() {
  // Força o scroll para o topo ao carregar/recarregar a página
  useEffect(() => {
    // Desabilita scroll suave temporariamente para scroll instantâneo no carregamento
    document.documentElement.style.scrollBehavior = 'auto';
    window.scrollTo(0, 0);
    
    // Reabilita scroll suave após um pequeno delay
    setTimeout(() => {
      document.documentElement.style.scrollBehavior = 'smooth';
    }, 100);
  }, []);

  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

function AppContent() {
  const { isValidRoute } = useRouteValidation();
  const currentPath = getNormalizedPathname(window.location.pathname);

  if (!isValidRoute) {
    return <NotFound />;
  }

  // Roteamento simples baseado no pathname
  if (currentPath === '/servicos' || currentPath === '/servicos/') {
    return <Services />;
  }

  return <Home />;
}

export default App;
