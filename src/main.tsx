import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Anime from './Contexts/MainContext'
import Context from './Contexts/MainContext'
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Context>
    <App />
    </Context>   
  </React.StrictMode>
)
fff