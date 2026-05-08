import { useLocation } from 'react-router-dom'
import './Nav.css'

export default function Nav() {
    const location = useLocation();
    const isActive = (hash) => location.hash === hash;

    return (
        <section className="nav-menu">
            <div className="nav-wrapper">
                <nav className="nav-container">
                    <a href="#geminiIntro" className={`nav-link ${isActive('#geminiIntro') ? 'active' : ''}`}>
                        Gemini в Gmail
                    </a>
                    <a href="#business" className={`nav-link ${isActive('#business') ? 'active' : ''}`}>
                        Для бизнеса
                    </a>
                    <a href="#security" className={`nav-link ${isActive('#security') ? 'active' : ''}`}>
                        Безопасность
                    </a>
                    <a href="#pricing" className={`nav-link ${isActive('#pricing') ? 'active' : ''}`}>
                        Тарифные планы
                    </a>
                    <a href="#trust" className={`nav-link ${isActive('#trust') ? 'active' : ''}`}>
                        Доверие
                    </a>       
                </nav>
            </div>
        </section>
    )
}