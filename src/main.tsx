import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css"
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import ContextProvider from './Context/Context.tsx'


createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <ContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ContextProvider>
  </StrictMode>
)