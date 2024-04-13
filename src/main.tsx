import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App.tsx'
import './app/styles/index.scss'
import { ThemeProvider } from './app/providers/ThemeProvider/index.ts'
import 'src/shared/config/i18n/i18n.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <Suspense fallback="loading...">
        <App />
      </Suspense>
    </ThemeProvider>
  </React.StrictMode>,
)
