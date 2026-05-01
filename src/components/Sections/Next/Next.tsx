import { Link } from 'react-router-dom'
import './Next.css'
import bigEmail from '../../../assets/logos/bigEmail.svg'
export default function Next() {
    return (
        <section className="next-section">
            <div className="next-wrapper">
                <div className="next-container">
                    <div className='next-items'>
                        <img src={bigEmail} alt="big email image" />
                        <h2 className='next-title'>Вперед к успеху</h2>
                        <p className='next-desc'>Воспользуйтесь всеми преимуществами Gmail!</p>
                    </div>
                    <div className='next-buttons'>
                        <Link to="/gmail/accountchooser/name" className='next-btn next-btn-primary'>Создать аккаунт</Link>
                        <Link to="/gmail/work" className='next-btn next-btn-outline'>Для работы</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}