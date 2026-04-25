import './Header.css'
import { Link } from 'react-router-dom'
import headerLogo from './assets/gmail.png'

export default function Header() {
    return (
        <div className="header">
            <div className="header-content">
                <div className="header-logos">
                    <Link to="/" className="header-logo-gmail" aria-label="Открыть gmail страницу">
                        <img src={headerLogo} alt="header-logo" />
                        <span>Gmail</span>
                    </Link>
                </div>
                <nav className="header-nav" />
                <div className="header-aside">
                    <Link to="/work">Для работы</Link>
                    <Link to="/login">Войти</Link>
                    <Link to="/accountchooser">Создать аккаунт</Link>
                </div>
            </div>
        </div>
    )
}