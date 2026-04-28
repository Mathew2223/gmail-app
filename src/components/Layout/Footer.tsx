import './Footer.css'
import x from '../../assets/icons/x.svg'
import youtube from '../../assets/icons/youtube.svg'
import linkedIn from '../../assets/icons/linkedIn.svg'
import instagram from '../../assets/icons/instagram.svg'
import facebook from '../../assets/icons/facebook.svg'
import tiktok from '../../assets/icons/tiktok.svg'
import Google from '../../assets/icons/Google.svg'

export default function Footer() {
    return (
        <footer>
            <div className="footer">
                <div className="footer-content">
                    <div className="footer-controls">
                        <div className="footer-social">
                            <div className="footer__social-title">
                                <p>Follow our <a className="footer__social-title button" href="https://workspace.google.com/blog/">Blog</a></p>
                            </div>
                            <ul>
                                <li>
                                    <a
                                        href="https://x.com/googleworkspace/"
                                        aria-label="Открыть footer social links X страницу в новой вкладке"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                    <picture>
                                        <img src={x} alt="x picture" />
                                    </picture>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.youtube.com/channel/UCBmwzQnSoj9b6HzNmFrg_yw/"
                                        aria-label="Открыть footer social links YouTube страницу в новой вкладке"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <picture>
                                            <img src={youtube} alt="youtube picture" />
                                        </picture>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.linkedin.com/showcase/googleworkspace/"
                                        aria-label="Открыть footer social links LinkedIn страницу в новой вкладке"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <picture>
                                            <img src={linkedIn} alt="linkedIn picture" />
                                        </picture>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.instagram.com/googleworkspace/"
                                        aria-label="Открыть footer social links Instagram страницу в новой вкладке"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <picture>
                                            <img src={instagram} alt="instagram picture" />
                                        </picture>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.facebook.com/googleworkspace"
                                        aria-label="Открыть footer social links Facebook страницу в новой вкладке"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <picture>
                                            <img src={facebook} alt="facebook picture" />
                                        </picture>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://goo.gle/3xj0b2F"
                                        aria-label="Открыть footer social links TikTok страницу в новой вкладке"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <picture>
                                            <img src={tiktok} alt="tiktok picture" />
                                        </picture>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-nav" part='navigation'>
                    <div className="footer__nav__logo">
                        <picture>
                            <img src={Google} alt="Google logo" />
                        </picture>
                    </div>
                    <ul className="footer__nav__links" slot='links'>
                        <li>
                            <a
                                href="https://policies.google.com/privacy?hl=ru"
                                className='footer__nav__link'
                                aria-label='Открыть Конфиденциальность страницу в новой вкладке'
                                rel='noopener noreferrer'
                            >
                                Конфиденциальность
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://policies.google.com/terms?hl=ru"
                                className='footer__nav__link'
                                aria-label='Открыть Условия использования страницу в новой вкладке'
                                rel='noopener noreferrer'
                            >
                                Условия использования
                            </a>
                        </li>
                        <li>
                        <a
                                href="https://about.google/?hl=ru"
                                className='footer__nav__link'
                                aria-label='Открыть О Google страницу в новой вкладке'
                                rel='noopener noreferrer'
                            >
                                О Google
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.google.com/intl/ru/about/products/?from=gafb-gmail_asw-body-ru"
                                className='footer__nav__link'
                                aria-label='Открыть Продукты Google страницу в новой вкладке'
                                rel='noopener noreferrer'
                            >
                                Продукты Google
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://support.google.com/workspace/?hl=ru"
                                className='footer__nav__link'
                                aria-label='Открыть Help страницу в новой вкладке'
                                rel='noopener noreferrer'
                            >
                                Help
                            </a>
                        </li>
                    </ul>
                    <div className="footer__nav__help">
                        <div slot='help'>
                            <a
                                href="https://support.google.com/a"
                                className="footer__nav__help__button"
                                aria-label='Открыть Справку страницу в новой вкладке'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/>
                                </svg>
                                <span>Справка</span>
                            </a>
                        </div>
                        <div className="footer__nav__language__selector">
                            <div className="language-selector">
                                <button className='language-selector__toggle' aria-label='Change Language' part='language-toggle' role='button' tabIndex={0}>
                                    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                                        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"/>
                                    </svg>
                                </button>
                                <div className="language-selector__label">
                                    <div className="active-language">Русский</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}