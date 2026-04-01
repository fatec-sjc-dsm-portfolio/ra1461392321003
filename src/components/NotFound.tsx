import "./NotFound.css"

export default function NotFound() {

  return (
    <div className="not-found-page">
      <div className="container">
        <div className="not-found-content">
          <div className="floating-elements">
            <div className="floating-circle circle-1"></div>
            <div className="floating-circle circle-2"></div>
            <div className="floating-circle circle-3"></div>
          </div>
          
          <div className="not-found-animation">
            <div className="error-code">404</div>
          </div>
          
          <h1 className="not-found-title">Página Não Encontrada</h1>
          <p className="not-found-description">
            Ops! Parece que a página que você está procurando não existe ou foi movida.
          </p>
        </div>
      </div>
    </div>
  )
}
