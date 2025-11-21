import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App'
import IndexPage from './pages/index'
import BlackjackTest from './pages/games/blackjack-test'
import VigilantTest from './pages/games/vigilant-test'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<IndexPage />} />
          <Route path="games/blackjack-test" element={<BlackjackTest />} />
          <Route path="games/vigilant-test" element={<VigilantTest />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
