import { Link, useNavigate } from "react-router-dom"
import gmailLogo from '../../../../assets/logos/gmail.png'
import './Password.css'
import { useEffect, useState } from "react"
import AuthFooter from "../../AuthFooter/AuthFooter"

export default function Password() {
    const [password, setPassword] = useState('');
    const [savedEmail, setSavedEmail] = useState<string | null>(null);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const email = localStorage.getItem('gmail_temp_email');
        if (!email) {
            navigate('/login');  // ✅ Исправлено: на главную входа
        } else {
            setSavedEmail(email)
        }
    }, [navigate])

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault()
        if (password.trim()) {
            localStorage.removeItem('gmail_temp_email');
            navigate('/work');  // ✅ Исправлено: куда нужно после входа (на работу/почту)
        }
    }
    if (!savedEmail) return null;

    return (
        <div className="passlog-wrapper">
            <div className="passlog-card">
                <div className="passlog-header">
                    <img src={gmailLogo} alt="Gmail logo" className="passlog-logo" />
                    <h1>Вход</h1>
                    <p>{savedEmail}</p>
                    <Link to="/login" className="change-account-link">Это не вы?</Link>  {/* ✅ Исправлено */}
                </div>
                <form action="" className="passlog-form" onSubmit={handleLogin}>
                    <div>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            className="passlog-input"
                            placeholder="Пароль"
                            onChange={(e) => setPassword(e.target.value)}
                            minLength={8}
                            maxLength={16}
                            required
                        />
                        <span className="pass-input-hint">Если забыли пароль, вы можете его восстановить.</span>
                    </div>
                    <div className="checkbox-group">
                        <input
                            type="checkbox"
                            id="show-password" 
                            checked={showPassword}
                            onChange={() => setShowPassword(!showPassword)}
                        />
                        <label htmlFor="show-password">Показать пароль</label>
                    </div>
                    <div className="passlog-actions">
                        <Link className="link-secondary" to="/login/forgotpassword">Забыли пароль?</Link>
                        <button type="submit" className="btn-primary btn-full">Войти</button>
                    </div>
                </form>
                <AuthFooter />
            </div>
        </div>
    )
}