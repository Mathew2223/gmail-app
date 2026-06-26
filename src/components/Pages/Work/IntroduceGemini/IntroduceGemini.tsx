import { useEffect, useState } from "react";
import { geminiData } from './geminiData.ts';
import './IntroduceGemini.css';

export interface ItemData {
    title: string;
    desc: string;
}

export default function IntroduceGemini() {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [hadLoadedOnce, setHadLoadedOnce] = useState<boolean>(false);

    const handleToggle = (index: number) => {
        setActiveIndex(index);
    };

    useEffect(() => {
        setHadLoadedOnce(true);
    }, []);
    
    return (
        <>
            <section id="geminiIntro" className="geminiIntro-section">
                <div className="geminiIntro-wrapper">
                    <h2 className="geminiIntro-title">Больше возможностей в приложении Gmail</h2>
                    <div className="geminiIntro-container">
                        <div className="geminiIntro-text-list">
                            {geminiData.map((item: ItemData, index: number) => (
                                <GeminiItem
                                    key={index}
                                    index={index}
                                    isActive={activeIndex === index}
                                    onToggle={() => handleToggle(index)}
                                    title={item.title}
                                    desc={item.desc}
                                />
                            ))}
                        </div>
                        <div className="geminiIntro-images">
                            <div className="image-card">
                                <img
                                    key={activeIndex}
                                    className={`geminiIntro-image ${hadLoadedOnce ? 'animate-on-change' : ''}`}
                                    src={geminiData[activeIndex].image}
                                    alt={geminiData[activeIndex].title}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <HelpGemini />
        </>
    );
}

export interface Props {
    index: number;
    title: string;
    desc: string;
    isActive: boolean;
    onToggle: () => void;
}

function GeminiItem({ title, desc, isActive, onToggle }: Props) {
    return (
        <div onClick={onToggle} className={`geminiIntro-item ${isActive ? "open" : ""}`}>
            <div className="geminiIntro-bar" />
            <div className="geminiIntro-content">
                <h3>{title}</h3>
                <div className="details-content">
                    <div>
                        <p>{desc}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

import fastAnswer_image from '../../../../assets/work_images/help-geminies/fastAnswer.webp'
import tips_image from '../../../../assets/work_images/help-geminies/tips.webp'
import showInformation_image from '../../../../assets/work_images/help-geminies/showInformation.webp'
import './HelpGemini.css'
function HelpGemini() {
    return (
        <section className="helpGemini-section">
            <div className="helpGemini-wrapper">
                <div className="helpGemini-container">
                    <div className="helpGemini-title">
                        <h2>Искусственный интеллект, всегда готовый помочь</h2>
                    </div>
                    <div className="helpGemini-cards">
                        <div className="helpGemini-card">
                            <img src={fastAnswer_image} alt="fast answer from gemini image" />
                            <h3>Быстрый ответ и умный ввод</h3>
                            <p>Сервис Gmail, которым пользуются более 180 млрд раз в год, помогает экономить время: предлагает готовые ответы и подсказывает фразы, когда вы пишете письма.</p>
                        </div>
                        <div className="helpGemini-card">
                            <img src={tips_image} alt="best tips with gemini image" />
                            <h3>Подсказки и напоминания</h3>
                            <p>С автоматическими напоминаниями вы больше не будете беспокоиться о том, что забыли кому-то ответить.</p>
                        </div>
                        <div className="helpGemini-card">
                            <img src={showInformation_image} alt="gemini show your information image" />
                            <h3>Удобное представление важной информации</h3>
                            <p>Gmail показывает сведения о поездках, бронированиях и покупках в верхней части письма, чтобы вы могли сразу увидеть важные данные.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}