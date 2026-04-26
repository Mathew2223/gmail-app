import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Login.tsx'
import Work from './Work.tsx'
import AccountChooser from './AccountChooser.tsx'
import Layout from './Layout.tsx'
import Menu from './Menu.tsx'

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
