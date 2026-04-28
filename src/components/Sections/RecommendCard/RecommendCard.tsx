import './RecommendCard.css'
import galochka from "../../../assets/cards_images/galochka.svg"
import notWifi from "../../../assets/cards_images/wifinet.svg"
import devices from "../../../assets/cards_images/devices.svg"
export default function RecommendCard() {
    return (
        <section className="card-section">
            <div className="card-wrapper">
                <div className="card-container">
                    <div className="recommendCard-item">
                        <img src={galochka} alt="galochka image" />
                        <h2 className='recommendItem-title'>Совместимость с другими инструментами</h2>
                        <p className='recommendItem-desc'>Почту Gmail можно добавить в Microsoft Outlook, Apple Mail, Mozilla Thunderbird и другие клиенты, а также синхронизировать с ними контакты и мероприятия.</p>
                    </div>
                    <div className="recommendCard-item">
                        <img src={notWifi} alt="not wifi image" />
                        <h2 className='recommendItem-title'>Офлайн-доступ</h2>
                        <p className='recommendItem-desc'>Читать и удалять письма, писать ответы, выполнять поиск по Gmail – всё это можно делать без подключения к интернету.</p>
                    </div>
                    <div className="recommendCard-item">
                        <img src={devices} alt="devisec image" />
                        <h2 className='recommendItem-title'>Доступность на всех устройствах</h2>
                        <p className='recommendItem-desc'>Все преимущества Gmail доступны вам на ходу с мобильных устройств.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}