import { Link } from "react-router-dom";
import './Service.css'
import service_image from '../../../../assets/work_images/service.png'

export default function Service() {
    return (
        <section className="service">
            <div className="service-container">
                <div className="service-title">
                    <h1>Самый популярный сервис электронной почты в мире</h1>
                    <p>Миллиарды пользователей и компаний по всему миру доверяют Gmail – безопасному и удобному сервису с поддержкой технологий искусственного интеллекта.</p>
                    <div className="service-button">
                        <Link to="/login" className="btn-service btn-primary-service">Начать здесь</Link>
                    </div>
                </div>
                <img className="service-image" src={service_image} alt="service image" />
            </div>
        </section>
    )
}