import { useNavigate } from "react-router-dom"
import gmailLogo from '../../../../assets/logos/gmail.png'
import './CreatePassword.css'
import { useState } from "react";
import AuthFooter from "../../AuthFooter/AuthFooter";

export default function CreatePassword() {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const navigate = useNavigate();

    const handleNextpassword = (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!password || !confirmPassword) return;

        if (password === confirmPassword) {
            setPasswordError(false);
            localStorage.setItem('account_password', password);
            navigate('/gmail');
        } else {
            setPasswordError(true);
        }
    }

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
        if (passwordError) setPasswordError(false);
    }

    const handleConfirmChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(e.target.value);
        if (passwordError) setPasswordError(false);
    }

    return (
        <div className="password-wrapper">
            <div className="password-card">
                <div className="password-header">
                    <img className="password-logo" src={gmailLogo} alt="gmail logo" />
                    <h1>Создайте пароль</h1>
                    <p>Введите пароль для вашего аккаунта Google.</p>
                </div>
                <form className="password-form" onSubmit={handleNextpassword}>
                    <div className="input-group">
                        <label className="input-label">Пароль</label>
                        <input
                            type={showPassword ? "text" : "password"}
                            className={`password-input ${passwordError && !password ? 'error-border' : ''}`}
                            value={password}
                            onChange={handlePasswordChange}
                            required 
                        />
                    </div>
                    <div className="input-group">
                        <label className="input-label">Подтвердите пароль</label>
                        <input
                            type={showPassword ? "text" : "password"}
                            className={`password-input ${passwordError ? 'error-border' : ''}`}
                            value={confirmPassword}
                            onChange={handleConfirmChange}
                            required 
                        />
                        {passwordError && (
                            <span className="error-text">
                                Пароли не совпадают. Повторите попытку.
                            </span>
                        )}
                    </div>
                    <div className="checkbox-group">
                        <input 
                            type="checkbox" 
                            id="show-pass" 
                            checked={showPassword}
                            onChange={() => setShowPassword(!showPassword)}
                        />
                        <label htmlFor="show-pass">Показать пароль</label>
                    </div>
                    <div className="password-actions">
                        <button type="submit" className="btn-primary btn-full">Далее</button>
                    </div>
                </form>
                <AuthFooter />
            </div>
        </div>
    )
}