import { Link, useNavigate } from "react-router-dom"
import gmailLogo from '../../../../assets/logos/gmail.png'
import './Login.css'
import { useState } from "react"
import AuthFooter from "../../AuthFooter/AuthFooter"

export default function Login() {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleNext = (e: React.FormEvent) => {
        e.preventDefault();
        if (email.trim()) {
            let finalEmail = email
            if (!email.includes('@')) {
                finalEmail = `${email}@gmail.com`
            }
            localStorage.setItem('gmail_temp_email', finalEmail);
            navigate('/gmail/password');
        }
    }

    return (
        <div className="login-wrapper">
            <div className="login-card">
                <div className="login-header">
                    <img className="login-logo" src={gmailLogo} alt="gmail logo" />
                    <h1>Вход</h1>
                    <p>Перейдите в аккаунт Google</p>
                </div>
                <form action="" className="login-form" onSubmit={handleNext}>
                    <div className="input-group">
                        <div className="email-input-wrapper">
                            <input
                                type="text"
                                className="login-input"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required 
                            />
                            {email === '' && (
                                <span className="email-suffix">@gmail.com</span>
                            )}
                        </div>
                        <span className="input-hint">Это не компьютер? Используйте гостевой режим, чтобы войти конфиденциально.</span>
                    </div>
                    <div className="login-actions">
                        <Link to="/gmail/accountchooser/name" className="link-secondary">Создать аккаунт</Link>
                        <button type="submit" className="btn-primary btn-full">Далее</button>
                    </div>
                </form>
                <AuthFooter />
            </div>
        </div>
    )
}