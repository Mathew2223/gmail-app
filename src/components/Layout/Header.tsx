import './Header.css'
import { Link } from 'react-router-dom'
import headerLogo from '../../assets/logos/gmail.png'

export default function Header() {
    return (
        <header>
            <div className="header">
                <div className="header-content">
                    <div className="header-logos">
                        <Link
                            to="" 
                            className="header-logo-gmail"
                            aria-label="Открыть gmail страницу"
                        >
                            <img src={headerLogo} alt="header-logo" />
                            <span>Gmail</span>
                        </Link>
                    </div>
                    <nav className="header-nav" />
                    <div className="header-aside">
                        <Link to="work">Для работы</Link>
                        <Link style={{ border: '1px solid #dadce0' }} to="/login">Войти</Link>
                        <Link to="login/name">Создать аккаунт</Link>
                    </div>
                </div>
            </div>
        </header>
    )
}