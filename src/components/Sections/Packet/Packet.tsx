import './Packet.css'
import gmailItems from "../../../assets/cards_images/gmaiItems.svg"
export default function Packet() {
    return (
        <section className="packet-section">
            <div className="packet-wrapper">
                <div className="packet-container">
                    <div className='packet-gmailItems'>
                        <img src={gmailItems} alt="gmail app images" />
                    </div>
                    <div className='packet-gmailItemsCard'>
                        <h2 className='packet-title'>Gmail в пакете Google Workspace</h2>
                        <p className='packet-subtitle'>
                            Единый центр для совместной работы, доступный на любом устройстве
                        </p>
                        <p className='packet-desc'>
                        Google Workspace – это набор инновационных и гибких инструментов для продуктивной работы и эффективного взаимодействия, которые подойдут для компаний и личного использования. Он включает Gmail, Календарь, Диск, Документы, Meet и другие популярные приложения Google.
                        </p>
                        <a
                            href="https://workspace.google.com/intl/ru/?utm_source=gmailforwork&utm_medium=et&utm_campaign=body&utm_content=learnmore"
                            className="packet-more"
                            aria-label='Узнать подробнее'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            Подробнее...
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}