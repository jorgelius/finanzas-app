
import React from 'react'
import ReactDOM from 'react-dom/client'

const App = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '2rem' }}>
      <h1>Finanzas AI App Lista</h1>
      <p>✅ Análisis de acciones y criptos</p>
      <p>✅ Noticias económicas</p>
      <p>✅ Portafolio editable</p>
      <p>🚧 Estrategias coming soon</p>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
