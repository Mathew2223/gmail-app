import { Link } from "react-router-dom";
import headerLogo from '../../../../assets/logos/gmail.png'
import '../../../Layout/Header.css'

export default function WorkHeader() {
    return (
        <header>
            <div className="header">
                <div className="header-content">
                    <div className="header-logos">
                        <Link to="/" className="header-logo-gmail" aria-label="Открыть gmail страницу">
                            <img src={headerLogo} alt="header-logo" />
                            <span>Gmail</span>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}