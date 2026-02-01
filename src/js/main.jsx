import React from 'react'
import ReactDOM from 'react-dom/client'


import '../styles/index.css' 


import TrafficLight from './components/TrafficLight'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TrafficLight />
  </React.StrictMode>,
)