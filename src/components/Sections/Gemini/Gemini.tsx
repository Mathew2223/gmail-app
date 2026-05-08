import './Gemini.css'

export default function Gemini() {
    return (
        <section className="gemini-section">
            <div className="gemini-wrapper">
                <div className="gemini-container">
                    <h2 className='gemini-title'>Gemini в Gmail</h2>
                    <p className='gemini-description'>Эффективнее работайте с электронной почтой на компьютере и мобильном устройстве – вместе с Gemini. 
                    Функции Gemini доступны в <a style={{ textDecoration: 'underline', color: '#1a73e8' }} href="https://one.google.com/about/ai-premium/" target='_blank'>тарифном плане Google AI Pro или Ultra </a> 
                    (для личного использования) и в <a style={{ textDecoration: 'underline', color: '#1a73e8' }} href="https://workspace.google.com/intl/ru/solutions/ai/" target='_blank'> тарифах Google Workspace</a> (для работы).</p>
                </div>
            </div>
        </section>
    )
}