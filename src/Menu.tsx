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

import './Advantage.css'
function Advantage() {
    return (
        <section className="advantage-section">
            <div className="advantage-wrapper">
                <div className="advantage-container">
                    <div className="advantage-title">
                        <h2>Все преимущества Gmail на вашем устройстве</h2>
                    </div>
                    <div className="advantagedownload">
                        <a
                            href="https://apps.apple.com/ru/app/gmail-%D0%BF%D0%BE%D1%87%D1%82%D0%B0-%D0%BE%D1%82-google/id422689480"
                            className="advantage-buttons app-store"
                            aria-label='Скачать Gmail из App Store'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <svg viewBox='0 0 24 24' fill='currentColor'>
                                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.5 1.3 0 2.52.88 3.31.88.76 0 2.17-.88 3.64-.75.62.03 2.36.25 3.47 1.88-3.02 1.81-2.52 6.1 1.02 7.6-.21.63-.5 1.25-.85 1.85l-.7 1.15zm-5.85-15.1c.67-.81 1.13-1.94 1-3.05-1.06.04-2.36.71-3.12 1.6-.69.79-1.29 2.05-1.13 3.03 1.19.09 2.41-.77 3.25-1.58z"/>
                            </svg>
                        </a>
                        <a
                            href="https://play.google.com/store/apps/details?id=com.google.android.gm&hl=ru_US&gl=US&pli=1"
                            className="advantage-buttons google-play"
                            aria-label='Скачать Gmail из Google Play'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <svg viewBox='0 0 24 24' fill='currentColor'>
                                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.3,10.84L17.84,9.44L15.39,12L17.84,14.56L20.3,13.16C20.78,12.89 21.1,12.38 21.1,11.84C21.1,11.3 20.78,10.79 20.3,10.52M16.81,8.88L14.54,11.15L6.05,2.66L16.81,8.88Z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

import './RecommendCard.css'
import galochka from "./assets/cards_images/galochka.svg"
import notWifi from "./assets/cards_images/wifinet.svg"
import devices from "./assets/cards_images/devices.svg"
function RecommendCard() {
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

import './Packet.css'
import gmailItems from './assets/gmaiItems.svg'
function Packet() {
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

export default function Menu() {
    return (
        <>
            <Hero />
            <Gemini />
            <Security />
            <Help />
            <Possible />
            <Advantage />
            <RecommendCard />
            <Packet />
        </>
    )
}