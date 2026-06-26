import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navigate } from 'react-router-dom';

import Login from './components/Pages/Enter/Login/Login'
import Work from './components/Pages/Work/Work'
import Layout from './components/Layout/Layout'
import Menu from './components/Layout/Menu'
import Password from './components/Pages/Enter/Password/Password'
import NameAccount from './components/Pages/AccountChooser/NameAccount/NameAccount'
import Birthday from './components/Pages/AccountChooser/Birthday/Birthday'
import UserName from './components/Pages/AccountChooser/UserName/UserName'
import CreatePassword from './components/Pages/AccountChooser/CreatePassword/CreatePassword'
import ForgotPassword from './components/Pages/Enter/ForgotPassword/ForgotPassword'
import ErrorPage from './components/Layout/ErrorPage/ErrorPage'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter basename="/gmail">
    <Routes>
      <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
        <Route index element={<Menu />} />
        <Route path="login" element={<Login />} />
        <Route path="login/name" element={<NameAccount />} />
        <Route path="login/birthday" element={<Birthday />} />
        <Route path="login/username" element={<UserName />} />
        <Route path="login/createpassword" element={<CreatePassword />} />
        <Route path="login/forgotpassword" element={<ForgotPassword />} />
        <Route path="password" element={<Password />} />
        <Route path="work" element={<Work />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </BrowserRouter>
)