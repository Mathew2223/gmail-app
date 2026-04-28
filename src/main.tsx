import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Pages/Login.tsx'
import Work from './components/Pages/Work.tsx'
import AccountChooser from './components/Pages/AccountChooser.tsx'
import Layout from './components/Layout/Layout.tsx'
import Menu from './components/Layout/Menu.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
        <Route path='/gmail' element={<Layout />}>
          <Route index element={<Menu />} />
          <Route path='login' element={<Login />} />
          <Route path='work' element={<Work />} />
          <Route path='accountchooser' element={<AccountChooser />} />
        </Route>
    </Routes>
  </BrowserRouter>
)
