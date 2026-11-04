import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrandSheet } from './BrandSheet'
import '../styles/globals.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrandSheet />
  </StrictMode>,
)
