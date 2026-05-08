import { Link } from 'react-router-dom'
import './Pricing.css'

export default function Pricing() {

    const handleNavigate = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        window.location.href = "/gmail/login";
    }

    return (
        <section id="pricing" className="pricing-section">
            <div className="pricing-wrapper">
                <h2 className="pricing-title">Выберите подходящий тарифный план</h2>
                <div className="pricing-table-wrapper">
                    <table className="pricing-table">
                        <thead>
                            <tr>
                                <th className="feature-header"></th>
                                <th className="plan-header">
                                    <div className="plan-card">
                                        <h3>Бесплатно</h3>
                                        <button className="btn-outline" onClick={handleNavigate}>Начать здесь</button>
                                    </div>
                                </th>
                                <th className="plan-header recommended-col">
                                    <div className="recommended-badge">РЕКОМЕНДУЕТСЯ</div>
                                    <div className="plan-card">
                                        <h3>Business Standard</h3>
                                        <button className="btn-primary-price" onClick={handleNavigate}>Начать здесь</button>
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="feature-name">Объединенное хранилище</td>
                                <td>15 ГБ на пользователя</td>
                                <td className='business-option'>2 ТБ на пользователя*</td>
                            </tr>
                            <tr>
                                <td className="feature-name">Доступ к платным инструментам для бизнеса</td>
                                <td></td>
                                <td className='business-option'>Собственный домен, запись видеовстреч, планирование встреч</td>
                            </tr>
                            <tr>
                                <td className="feature-name">Усиленная безопасность</td>
                                <td>Стандартное шифрование</td>
                                <td className='business-option'>Стандартное шифрование, а также шифрование на стороне клиента в некоторых тарифах</td>
                            </tr>
                            <tr>
                                <td className="feature-name">Персональная поддержка</td>
                                <td></td>
                                <td className='business-option'>Круглосуточная поддержка даже по выходным</td>
                            </tr>
                            <tr className='last-row'>
                                <td className="feature-name">Gemini в Gmail (генеративный ИИ)</td>
                                <td>Доступно в тарифах <Link to="/gmail/login">Google AI Pro</Link> и <Link to="/gmail/login">Ultra</Link> для личного пользования</td>
                                <td className='business-option'>Доступно в текущем тарифе <Link to="/gmail/login">Workspace</Link></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p className="pricing-note">* В Google Workspace пользователям предоставляется объединенное хранилище, общий объем которого зависит от количества лицензий. Посетите наш Справочный центр, чтобы узнать, как получить дополнительное пространство для своей компании.</p>
            </div>
        </section>
    )
}