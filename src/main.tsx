import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Pages/Enter/Login/Login.tsx'
import Work from './components/Pages/Work/Work.tsx'
import Layout from './components/Layout/Layout.tsx'
import Menu from './components/Layout/Menu.tsx'
import Password from './components/Pages/Enter/Password/Password.tsx'
import NameAccount from './components/Pages/AccountChooser/NameAccount/NameAccount.tsx'
import Birthday from './components/Pages/AccountChooser/Birthday/Birthday.tsx'
import UserName from './components/Pages/AccountChooser/UserName/UserName.tsx'
import CreatePassword from './components/Pages/AccountChooser/CreatePassword/CreatePassword.tsx'
import ForgotPassword from './components/Pages/Enter/ForgotPassword/ForgotPassword.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
        <Route path='/gmail' element={<Layout />}>
          <Route index element={<Menu />} />
          <Route path='login' element={<Login />} />
          <Route path='work' element={<Work />} />
          <Route path='accountchooser'>
            <Route path='name' element={<NameAccount />} />
            <Route path='birthday' element={<Birthday />} />
            <Route path='username' element={<UserName />} />
            <Route path='password' element={<CreatePassword />} />
            <Route path='forgotpassword' element={<ForgotPassword />} />
          </Route>
          <Route path='password' element={<Password />} />
        </Route>
    </Routes>
  </BrowserRouter>
)
