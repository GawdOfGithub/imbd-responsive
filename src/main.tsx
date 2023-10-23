import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Context from './Contexts/MainContext'
import AuthProvider from './Contexts/AuthContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
    <Context>
    <App />
    </Context>   
    </AuthProvider>
  </React.StrictMode>
)