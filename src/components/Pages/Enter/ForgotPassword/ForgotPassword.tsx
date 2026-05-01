import { useState } from 'react'
import gmailLogo from '../../../../assets/logos/gmail.png'
import AuthFooter from '../../AuthFooter/AuthFooter'
import { useNavigate } from 'react-router-dom';
import './ForgotPassword.css'

export default function ForgotPassword() {
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [newPasswordError, setNewPasswordError] = useState(false);
    const navigate = useNavigate();

    const handleNextNewPasswordChange = (e: React.FormEvent) => {
        e.preventDefault();
        if (newPassword === confirmNewPassword) {
            setNewPasswordError(false);
            localStorage.setItem('account_new_password', newPassword);
            navigate('/gmail');
        } else {
            setNewPasswordError(true);
        }
    }

    const handleNewPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewPassword(e.target.value);
        if (newPasswordError) {
            setNewPasswordError(false)
        }
    }

    const handleConfirmNewChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setConfirmNewPassword(e.target.value);
        if (newPasswordError) {
            setNewPasswordError(false);
        }
    }


    return (
        <div className="forgotPassword-wrapper">
            <div className="forgotPassword-card">
                <div className="forgotPassword-header">
                    <img className="forgotPassword-logo" src={gmailLogo} alt="gmail logo" />
                    <h1>Придумайте новый пароль</h1>
                    <p>Придумайте надежный пароль для вашего аккаунта Google.</p>
                </div>
                <form className="forgotPassword-form" onSubmit={handleNextNewPasswordChange}>
                    <div className="input-group">
                        <label className="input-label">Новый пароль</label>
                        <input
                            type={showNewPassword ? "text" : "password"}
                            className={`forgotPassword-input ${newPasswordError && !newPassword ? 'error-border' : ''}`}
                            value={newPassword}
                            onChange={handleNewPasswordChange}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label className="input-label">Подтвердите пароль</label>
                        <input
                            type={showNewPassword ? "text" : "password"}
                            className={`forgotPassword-input ${newPasswordError && !newPassword ? 'error-border' : ''}`}
                            value={confirmNewPassword}
                            onChange={handleConfirmNewChange}
                            required
                        />
                        {newPasswordError && (
                            <span className="error-text">
                                Пароли не совпадают. Повторите попытку.
                            </span>
                        )}
                    </div>
                    <span className="pass-input-hint">
                        Используйте не менее 8 символов и не используйте слишком лёгкие пароли.
                    </span>
                    <div className="checkbox-group">
                        <input
                            type="checkbox"
                            id="show-newPass" 
                            checked={showNewPassword}
                            onChange={() => setShowNewPassword(!showNewPassword)}
                        />
                        <label htmlFor="show-newPass">Показать пароль</label>
                    </div>
                    <div className="newPassword-actions">
                        <button className="btn-primary btn-full">Далее</button>
                    </div>
                </form>
                <AuthFooter />
            </div>
        </div>
    )
}