import { Link, useNavigate } from "react-router-dom"
import gmailLogo from '../../../../assets/logos/gmail.png'
import './NameAccount.css'
import { useState } from "react";
import AuthFooter from "../../AuthFooter/AuthFooter";

export default function NameAccount() {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const navigate = useNavigate();

    const handleName = (e: React.FormEvent) => {
        e.preventDefault();
        if (name.trim()) {
            localStorage.setItem('name_temp_name', name);
            navigate('/gmail/accountchooser/birthday');
        }
    }

    return (
        <div className="account-wrapper">
            <div className="account-card">
                <div className="account-header">
                    <img className="account-logo" src={gmailLogo} alt="gmail-logo" />
                    <h1>Создание аккаунта Google</h1>
                </div>
                <form action="" className="account-form" onSubmit={handleName}>
                    <div className="name-fields">
                        <div className="input-group">
                            <input
                                type="text"
                                className="account-input"
                                placeholder="Имя"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="input-group">              
                            <input
                                type="text"
                                className="account-input"
                                placeholder="Фамилия (необязательно)"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </div>
                    </div>
                    <span className="input-hint">Это не компьютер? Используйте гостевой режим чтобы войти конфиденциально</span>
                    <div className="account-actions">
                        <Link to="/gmail/login" className="link-secondary">Уже есть аккаунт</Link>
                        <button type="submit" className="name-btn-primary name-btn-full">Далее</button>
                    </div>
                </form>
                <AuthFooter />
            </div>
        </div>
    )
}