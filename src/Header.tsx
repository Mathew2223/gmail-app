import './Header.css'
import { Link, useNavigate } from 'react-router-dom'
import headerLogo from './assets/gmail.png'

export default function Header() {
    const navigate = useNavigate();

    const handlePage = (e: React.MouseEvent) => {
        e.preventDefault();
        setTimeout(() => {
            navigate('/gmail');
        }, 100)
    }

    return (
        <div className="header">
            <div className="header-content">
                <div className="header-logos">
                    <Link to="/gmail" onClick={handlePage} className="header-logo-gmail" aria-label="Открыть gmail страницу">
                        <img src={headerLogo} alt="header-logo" />
                        <span>Gmail</span>
                    </Link>
                </div>
                <nav className="header-nav" />
                <div className="header-aside">
                    <Link to="/gmail/work">Для работы</Link>
                    <Link to="/gmail/login">Войти</Link>
                    <Link to="/gmail/accountchooser">Создать аккаунт</Link>
                </div>
            </div>
        </div>
    )
}