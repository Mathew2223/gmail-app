import { useEffect, useState } from "react";
import { instrumentsData } from './instrumentsData.js';
import { type Props } from '../IntroduceGemini/IntroduceGemini'
import './Instruments.css'

export default function Instruments() {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [hadLoadedOnce, setHadLoadedOnce] = useState<boolean>(false);

    const handleToggle = (index: number) => {
        setActiveIndex(index);
    }

    useEffect(() => {
        setHadLoadedOnce(true);
    }, [])

    return (
        <>
            <section id="business" className="business-section">
                <div className="business-wrapper">
                    <h2 className="business-title">Больше возможностей в приложении Gmail</h2>
                    <div className="business-container">
                        <div className="business-text-list">
                            {instrumentsData.map((item, index) => (
                                <InstrumentsItem
                                    key={index}
                                    index={index}
                                    isActive={activeIndex === index}
                                    onToggle={() => handleToggle(index)}
                                    title={item.title}
                                    desc={item.desc}
                                />
                            ))}
                        </div>
                        <div className="business-images">
                            <div className="image-card">
                                <img
                                    key={activeIndex}
                                    className={`business-image ${hadLoadedOnce ? 'animate-on-change' : ''}`}
                                    src={instrumentsData[activeIndex].image}
                                    alt={instrumentsData[activeIndex].title}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

function InstrumentsItem({ title, desc, isActive, onToggle }: Props) {
    return (
        <div onClick={onToggle} className={`business-item ${isActive ? 'open' : ''}`}>
            <div className="business-bar" />
            <div className="business-content">
                <h3>{title}</h3>
                <div className="details-content">
                    <div>
                        <p>{desc}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}