import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/layouts/App/App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
