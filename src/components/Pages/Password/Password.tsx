import { Link } from "react-router"
import gmailLogo from '../../../assets/logos/gmail.png'
import './Password.css'

export default function Password() {
    return (
        <div className="password-wrapper">
            <div className="password-card">
                <div className="password-header">
                    <img src={gmailLogo} alt="" className="password-logo" />
                    <h1>Вход</h1>
                    <p>Перейдите в аккаунт Google</p>
                </div>
                <form action="" className="password-form" onSubmit={(e) => e.preventDefault()}>
                    <div className="input-group">
                        <input type="password" className="password-input" placeholder="Пароль" required />
                        <span className="input-hint">Если забыли пароль, вы можете его восстановить.</span>
                    </div>
                    <div className="password-actions">
                        <Link className="link-secondary" to="/gmail/forgotpassword">Забыли пароль?</Link>
                        <Link to="/gmail" className="btn-primary btn-full">Войти</Link>
                    </div>
                    <div className="password-footer">
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