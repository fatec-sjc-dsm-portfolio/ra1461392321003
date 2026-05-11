import { useEffect } from 'react';
import Home from './pages/Home';
import NotFound from './components/NotFound';
import { ThemeProvider } from './context/ThemeContext';
import { useRouteValidation } from './hooks';

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

  if (!isValidRoute) {
    return <NotFound />;
  }

  return <Home />;
}

export default App;
