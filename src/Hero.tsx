import { Link } from 'react-router-dom'
import './Hero.css'
import heroImage from "./assets/gmailTitle.png" 

export default function Hero() {
    return (
        <section className='hero'>
            <div className='hero-container'>
                <div className='hero-text'>
                    <h1>Почта с умными функциями, надежной защитой и понятным интерфейсом</h1>
                    <p>Успевайте больше с Gmail благодаря Google Chat, Google Meet и другим встроенным инструментам для эффективного общения.</p>
                    <div className='hero-buttons'>
                        <Link to="/accountchooser" className='btn btn-primary'>Создать аккаунт</Link>
                        <Link to="/work" className='btn btn-outline'>Для работы</Link>
                    </div>
                </div>
                <div className='hero-image'>
                    <img src={heroImage} alt="gmail interface preview" />
                </div>
            </div>
        </section>
    )
}