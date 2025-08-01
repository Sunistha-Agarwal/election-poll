import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'next-themes'
import './index.css'
import App from './App.jsx'
import { AuthContextProvider } from './context/AuthContext.jsx'
import axios from 'axios'

axios.defaults.baseURL = import.meta.env.VITE_Base_URL;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContextProvider>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <App />
    </ThemeProvider>
    </AuthContextProvider>
  </StrictMode>,
)
