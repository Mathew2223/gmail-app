import { Link } from "react-router"
import gmailLogo from '../../../assets/logos/gmail.png'
import './Login.css'

export default function Login() {
    return (
        <div className="login-wrapper">
            <div className="login-card">
                <div className="login-header">
                    <img src={gmailLogo} alt="" className="login-logo" />
                    <h1>Вход</h1>
                    <p>Перейдите в аккаунт Google</p>
                </div>
                <form action="" className="login-form" onSubmit={(e) => e.preventDefault()}>
                    <div className="input-group">
                        <input type="email" className="login-input" placeholder="Email или телефон" required />
                        <span className="input-hint">Это не компьютер? Используйте гостевой режим, чтобы войти конфиденциально.</span>
                    </div>
                    <div className="login-actions">
                        <Link className="link-secondary" to="/gmail/accountchooser">Создать аккаунт</Link>
                        <Link to="/gmail/password" className="btn-primary btn-full">Далее</Link>
                    </div>
                    <div className="login-footer">
                        <div className="footer-links">
                            <a href="" className="footer-link">Справка</a>
                            <a href="" className="footer-link">Конфиденциальность</a>
                            <a href="" className="footer-link">Условия использования</a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}