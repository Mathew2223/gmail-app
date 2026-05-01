import { Link, useNavigate } from "react-router-dom"
import gmailLogo from '../../../../assets/logos/gmail.png'
import './Birthday.css'
import { useState } from "react";
import { days, months, years, genders } from './Birthday'
import AuthFooter from '../../AuthFooter/AuthFooter'

export default function Birthday() {
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [gender, setGender] = useState('');
    const navigate = useNavigate();

    const handleName = (e: React.FormEvent) => {
        e.preventDefault();
        if (day && month && year && gender) {
            localStorage.setItem('account_birthday', JSON.stringify({ day, month, year }));
            localStorage.setItem('account_gender', gender)
            navigate('/gmail/accountchooser/username');
        } else {
            console.log('Пожалуйста, заполните все поля!')
        }
    }

    return (
        <div className="birthday-wrapper">
            <div className="birthday-card">
                <div className="birthday-header">
                    <img className="birthday-logo" src={gmailLogo} alt="gmail-logo" />
                    <h1>Создание аккаунта Google</h1>
                </div>
                <form action="" className="birthday-form" onSubmit={handleName}>
                    <div className="date-fields">
                        <div className="input-group">
                            <label htmlFor="" className="input-label">День</label>
                            <select
                                className="birthday-select"
                                value={day}
                                onChange={(e) => setDay(e.target.value)}
                                required
                            >
                                <option value="" disabled>День</option>
                                {days.map(day => (
                                    <option key={day} value={day}>{day}</option>
                                ))}
                            </select>
                        </div>
                        <div className="input-group">              
                            <label htmlFor="" className="input-label">Месяц</label>
                            <select
                                className="birthday-select"
                                value={month}
                                onChange={(e) => setMonth(e.target.value)}
                                required
                            >
                                <option value="" disabled>Месяц</option>
                                {months.map(month => (
                                    <option key={month} value={month}>{month}</option>
                                ))}
                            </select>
                        </div>
                        <div className="input-group">
                            <label htmlFor="" className="input-label">Год</label>
                            <select
                                className="birthday-select"
                                value={year}
                                onChange={(e) => setYear(e.target.value)}
                                required
                            >
                                <option value="" disabled>Год</option>
                                {years.map(year => (
                                    <option key={year} value={year}>{year}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="input-group">              
                            <label htmlFor="" className="input-label">Пол</label>
                            <select
                                className="birthday-select"
                                value={gender}
                                onChange={(e) => setGender(e.target.value)}
                                required
                            >
                                <option value="" disabled>Выберите пол</option>
                                {genders.map(gender => (
                                    <option key={gender.value} value={gender.value}>{gender.value}</option>
                                ))}
                            </select>
                    </div>
                    <span className="input-hint">
                        Эта информация не будет отображаться в вашем аккаунте. Используйте дату своего рождения.
                    </span>
                    <div className="birthday-actions">
                        <Link to="/gmail/login" className="link-secondary">Уже есть аккаунт</Link>
                        <button type="submit" className="birthday-btn-primary birthday-btn-full">Далее</button>
                    </div>
                </form>
                <AuthFooter />
            </div>
        </div>
    )
}