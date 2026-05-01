import { useNavigate } from "react-router-dom"
import gmailLogo from '../../../../assets/logos/gmail.png'
import './UserName.css'
import { useState } from "react";
import AuthFooter from "../../AuthFooter/AuthFooter";

export default function UserName() {
    const [username, setUserName] = useState('');
    const navigate = useNavigate();

    const handleUser = (e: React.FormEvent) => {
        e.preventDefault();
        if (username.trim()) {
            let finalUsername = username
            if (!username.includes('@')) {
                finalUsername = `${username}@gmail.com`
            }
            localStorage.setItem('username_temp_username', finalUsername);
            navigate('/gmail/accountchooser/password');
        }
    }

    return (
        <div className="username-wrapper">
            <div className="username-card">
                <div className="username-header">
                    <img className="username-logo" src={gmailLogo} alt="gmail logo" />
                    <h1>Настройки входа в аккаунт</h1>
                    <p>Создайте адрес Gmail для входа в аккаунт Google.</p>
                </div>
                <form action="" className="username-form" onSubmit={handleUser}>
                    <div className="input-group">
                        <div className="username-input-wrapper">
                            <input
                                type="text"
                                className="username-input"
                                placeholder="Имя пользователя"
                                value={username}
                                onChange={(e) => setUserName(e.target.value)}
                                required 
                            />
                            {username === '' && (
                                <span className="username-suffix">@gmail.com</span>
                            )}
                        </div>
                    </div>
                    <span className="input-hint">Можно использовать буквы латинского алфавита, цифры и точки.</span>
                    <div className="username-actions">
                        <button type="submit" className="btn-primary btn-full">Далее</button>
                    </div>
                </form>
                <AuthFooter />
            </div>
        </div>
    )
}