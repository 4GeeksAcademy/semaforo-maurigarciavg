import React from 'react'
import ReactDOM from 'react-dom/client'

// 1. Asegúrate de que la ruta al CSS sea correcta ahora
import '../styles/index.css' 

// 2. Asegúrate de importar tu componente
import TrafficLight from './components/TrafficLight'

// 3. El renderizado
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TrafficLight />
  </React.StrictMode>,
)