import { Link } from 'react-router-dom'
import './Trust.css'
import bigEmail from '../../../../assets/logos/bigEmail.svg'
export default function Trust() {
    return (
        <section id='trust' className="trust-section">
            <div className="trust-wrapper">
                <div className="trust-container">
                    <div className='trust-items'>
                        <img src={bigEmail} alt="big email image" />
                        <h2 className='trust-title'>Gmail доверяют миллиарды пользователей</h2>
                    </div>
                    <div className='trust-buttons'>
                        <Link to="/login" className='trust-btn next-btn-primary'>Начать здесь</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}