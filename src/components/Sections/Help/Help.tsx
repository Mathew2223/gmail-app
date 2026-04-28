import { useEffect, useState } from 'react';
import './Help.css'
import { helpData } from './helpData.js';

export default function Help() {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [hadLoadedOnce, setHadLoadedOnce] = useState<boolean>(false);

    const handleToggle = (index: number) => {
        setActiveIndex(index);
    }

    useEffect(() => {
        setHadLoadedOnce(true);
    }, [])
    
    return (
        <section className="help-section">
            <div className="help-wrapper">
                <h2 className="help-title">Gmail помогает справляться с делами</h2>
                <div className="help-container">
                    <div className="help-text-list">
                        {helpData.map((item: any, index: number) => (
                            <HelpItem
                                key={index}
                                index={index}
                                isActive={activeIndex === index}
                                onToggle={() => handleToggle(index)}
                                title={item.title}
                                desc={item.desc}
                            />
                        ))}
                    </div>
                    <div className="help-images help-images">
                        <div className="image-card main-image fade-in">
                            <img
                                key={activeIndex}
                                className={`help-image ${hadLoadedOnce ? 'animate-on-change' : ''}`}
                                src={helpData[activeIndex].image}
                                alt={`Help feature ${activeIndex + 1}`}
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

function HelpItem({ title, desc, isActive, onToggle }: Props) {
    return (
        <div onClick={onToggle} className={`help-item ${isActive ? "open" : ""}`}>
            <div className="help-bar" />
            <h3>{title}</h3>
            <div className="details-content">
                <p>{desc}</p>
            </div>
        </div>
    )
}