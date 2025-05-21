
import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'

const App = () => {
  const [análisis, setAnálisis] = useState('')
  const [guardados, setGuardados] = useState([])
  const [portafolio, setPortafolio] = useState('')
  const [noticias] = useState([
    '🔔 La FED mantiene tipos sin cambios.',
    '📉 Caída del Nasdaq un 1.2%',
    '📈 Bitcoin rebota tras semana bajista'
  ])

  const guardarAnálisis = () => {
    if (análisis) {
      const nuevos = [...guardados, análisis]
      setGuardados(nuevos)
      localStorage.setItem('analisis', JSON.stringify(nuevos))
      setAnálisis('')
    }
  }

  return (
    <div style={{ fontFamily: 'Arial', padding: '2rem' }}>
      <h1>📊 Finanzas AI</h1>

      <h2>Análisis de acciones o cripto</h2>
      <textarea
        rows={4}
        cols={50}
        placeholder="Escribe tu análisis aquí..."
        value={análisis}
        onChange={(e) => setAnálisis(e.target.value)}
      />
      <br />
      <button onClick={guardarAnálisis}>💾 Guardar</button>

      <h3>Análisis guardados:</h3>
      <ul>
        {guardados.map((a, i) => <li key={i}>📝 {a}</li>)}
      </ul>

      <hr />
      <h2>📰 Noticias destacadas</h2>
      <ul>
        {noticias.map((n, i) => <li key={i}>{n}</li>)}
      </ul>

      <hr />
      <h2>📁 Tu portafolio</h2>
      <textarea
        rows={3}
        cols={50}
        placeholder="Ej: 40% BTC, 30% S&P500, 10% Energía..."
        value={portafolio}
        onChange={(e) => setPortafolio(e.target.value)}
      />
      <p><strong>IA:</strong> Portafolio balanceado. Buen enfoque en diversificación.</p>

      <hr />
      <h2>🧠 Estrategias (próximamente)</h2>
      <p>🚧 Estamos trabajando en esta sección.</p>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
