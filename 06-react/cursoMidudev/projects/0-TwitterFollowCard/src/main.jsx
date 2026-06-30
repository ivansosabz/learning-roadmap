import React from 'react'                    // import por defecto (no lleva llaves)
import { StrictMode } from 'react'           // import nombrado (lleva llaves)
import { createRoot } from 'react-dom/client' // igual, import nombrado
import {App} from './App.jsx'                // import nombrado de mi propio archivo
import './index.css'                          // import sin nombre, solo ejecuta el CSS

// createRoot recibe un elemento del DOM (el div#root)
// .render() pinta el componente dentro de ese elemento
createRoot(document.getElementById('root')).render(
  // StrictMode es un helper que detecta problemas en desarrollo
  // <App /> es JSX: invoca el componente App. Self-closing porque no tiene children
  <App />
)
