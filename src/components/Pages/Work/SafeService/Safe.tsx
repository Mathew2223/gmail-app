import './Safe.css'
import chatting_image from '../../../../assets/security_images/chatting.jpg'
import devices_image from '../../../../assets/security_images/devices.jpg'

export default function Safe() {
    return (
        <section id="security" className="safe-section">
            <div className="safe-wrapper">
                <div className="safe-container">
                    <div className="safe-title">
                        <h2>Самый безопасный сервис электронной почты для бизнеса</h2>
                        <p>Функции защиты на основе искусственного интеллекта, настройки безопасности и конфиденциальности корпоративного уровня и надежная облачная инфраструктура Google помогают защитить ваши данные в Gmail и обеспечить соблюдение требований.</p>
                    </div>
                    <div className="safe-cards">
                        <div className="safe-card">
                            <h3>99,9 %</h3>
                            <p>спама, фишинговых писем и вредоносного ПО блокируется в Gmail автоматически.</p>
                        </div>
                        <div className="safe-card">
                            <h3>В 2 раза</h3>
                            <p>больше вредоносного ПО (в среднем) по сравнению со стандартным антивирусом распознается в Gmail.</p>
                        </div>
                        <div className="safe-card">
                            <h3>0</h3>
                            <p>общеизвестных уязвимостей (CVE) высокого и критического уровня обнаружено за последние пять лет.</p>
                        </div>
                    </div>
                    <div className="safe-feature-row">
                        <div className="safe-feature-text">
                            <h3>Все способы связи в одном приложении</h3>
                            <p>Проводите видеовстречи в Google Meet, сверяйтесь с расписанием в Google Календаре, пополняйте список дел в Задачах и общайтесь в Google Chat, не покидая Gmail.</p>
                        </div>
                        <div className="safe-feature-image">
                            <img src={chatting_image} alt="Google Meet and Chat" />
                        </div>
                    </div>
                    <div className="safe-feature-row reverse">
                        <div className="safe-feature-text">
                            <h3>Доступ к почте когда угодно и с любого устройства</h3>
                            <p>Gmail можно использовать на компьютере, смартфоне, планшете и даже часах. А глобальная инфраструктура Google делает доступ к сервису надежным и безопасным в любое время дня и ночи.</p>
                        </div>
                        <div className="safe-feature-image">
                            <img src={devices_image} alt="Devices" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}