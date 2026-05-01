import './AuthFooter.css';

export default function AuthFooter() {
    return (
        <div className="auth-footer">
            <div className="footer-links">
                <a href="https://support.google.com/a" className="footer-link">
                    Справка
                </a>
                <a href="https://policies.google.com/privacy?hl=ru" className="footer-link">
                    Конфиденциальность
                </a>
                <a href="https://policies.google.com/terms?hl=ru" className="footer-link">
                    Условия использования
                </a>
            </div>
        </div>
    )
}