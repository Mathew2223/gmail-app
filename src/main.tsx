import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home.tsx'
// import Login from './Login.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
        <Route>
          <Route index path='/' element={<Home />} />
          {/* <Route path='login' element={<Login />} /> */}
        </Route>
    </Routes>
  </BrowserRouter>
)
