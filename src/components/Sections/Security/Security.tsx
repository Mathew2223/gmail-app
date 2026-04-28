import { useEffect, useState } from 'react'
import './Security.css'
import { securityData } from './securityData.js';

export default function Security() {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [hadLoadedOnce, setHadLoadedOnce] = useState<boolean>(false);

    const handleToggle = (index: number) => {
        setActiveIndex(index);
    }

    useEffect(() => {
        setHadLoadedOnce(true);
    }, [])

    return (
        <section className='security-section'>
            <div className='security-wrapper'>
                <h2 className='security-title'>Безопасность, конфиденциальность и гибкость</h2>
                <div className='security-container'>
                    <div className='security-text-list'>
                        {securityData.map((item: any, index: number) => (
                            <SecurityItem
                                key={index}
                                index={index}
                                isActive={activeIndex === index}
                                onToggle={() => handleToggle(index)}
                                title={item.title}
                                desc={item.desc}
                            />
                        ))}
                    </div>
                    <div className='security-images'>
                        <div className="image-card main-image fade-in">
                            <img
                                key={activeIndex}
                                className={`security-img ${hadLoadedOnce ? 'animate-on-change': ''}`}
                                src={securityData[activeIndex].image}
                                alt={`Security feature ${activeIndex + 1}`}
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

function SecurityItem({ title, desc, isActive, onToggle }: Props)  {
    return (
        <div onClick={onToggle} className={`security-item ${isActive ? "open" : ""}`}>
            <div className="security-bar" />
            <h3>{title}</h3>
            <div className="details-content">
                <p>{desc}</p>
            </div>
        </div>
    )
}