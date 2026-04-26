import { Link } from 'react-router-dom'
import heroImage from "./assets/gmailTitle.png"
import Security from './Security'
import Help from './Help'

import './Hero.css'
function Hero() {
    return (
        <section className='hero'>
            <div className='hero-container'>
                <div className='hero-text'>
                    <h1>Почта с умными функциями, надежной защитой и понятным интерфейсом</h1>
                    <p>Успевайте больше с Gmail благодаря Google Chat, Google Meet и другим встроенным инструментам для эффективного общения.</p>
                    <div className='hero-buttons'>
                        <Link to="/gmail/accountchooser" className='btn btn-primary'>Создать аккаунт</Link>
                        <Link to="/gmail/work" className='btn btn-outline'>Для работы</Link>
                    </div>
                </div>
                <div className='hero-image'>
                    <img src={heroImage} alt="gmail interface preview" />
                </div>
            </div>
        </section>
    )
}

import './Gemini.css'
import Possible from './Possibility'
function Gemini() {
    return (
        <section className="gemini-section">
            <div className="gemini-wrapper">
                <div className="gemini-container">
                    <h2 className='gemini-title'>Gemini в Gmail</h2>
                    <p className='gemini-description'>Эффективнее работайте с электронной почтой на компьютере и мобильном устройстве – вместе с Gemini. Функции Gemini доступны в тарифном плане Google AI Pro или Ultra (для личного использования) и в тарифах Google Workspace (для работы).</p>
                </div>
            </div>
        </section>
    )
}

export default function Menu() {
    return (
        <>
            <Hero />
            <Gemini />
            <Security />
            <Help />
            <Possible />
        </>
    )
}