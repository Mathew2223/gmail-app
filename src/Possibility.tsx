import { useEffect, useState } from 'react';
import './Possible.css'
import { possibleData } from './possibleData.js';

export default function Possible() {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [hadLoadedOnce, setHadLoadedOnce] = useState<boolean>(false);

    const handleToggle = (index: number) => {
        setActiveIndex(index);
    }

    useEffect(() => {
        setHadLoadedOnce(true);
    }, [])
    
    return (
        <section className="possible-section">
            <div className="possible-wrapper">
                <h2 className="possible-title">Больше возможностей в приложении Gmail</h2>
                <div className="possible-container">
                    <div className="possible-text-list">
                        {possibleData.map((item: any, index: number) => (
                            <PossibleItem
                                key={index}
                                index={index}
                                isActive={activeIndex === index}
                                onToggle={() => handleToggle(index)}
                                title={item.title}
                                desc={item.desc}
                            />
                        ))}
                    </div>
                    <div className="possible-images possible-images">
                        <div className="image-card main-image fade-in">
                            <img
                                key={activeIndex}
                                className={`possible-image ${hadLoadedOnce ? 'animate-on-change' : ''}`}
                                src={possibleData[activeIndex].image}
                                alt={`possible feature ${activeIndex + 1}`}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

interface Props {
    index: number;
    title: string;
    desc: string;
    isActive: boolean;
    onToggle: () => void;
}

function PossibleItem({ title, desc, isActive, onToggle }: Props) {
    return (
        <div onClick={onToggle} className={`possible-item ${isActive ? "open" : ""}`}>
            <div className="possible-bar" />
            <h3>{title}</h3>
            <div className="details-content">
                <p>{desc}</p>
            </div>
        </div>
    )
}