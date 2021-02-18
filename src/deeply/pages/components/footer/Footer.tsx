import './Footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__column">
                    <h1 className="footer__logo">
                        <a className="footer__logo-link" href="/">deeply</a>
                    </h1>
                    <p className="footer__copyright-disclaimer">
                        &copy; 2021 - made with love by <a className="footer__link" href="https://filmstock.tv" rel="noreferrer" target="_blank">filmstock, co</a>
                    </p>
                </div>
                <div className="footer__column footer__column--links">
                    <div>
                        <a className="footer__link" href="/about">about us</a>
                        <a className="footer__link" href="/contact">contact</a>
                        <a className="footer__link" href="/privacy">privacy</a>
                        <a className="footer__link" href="/faqs">faqs</a>
                        <a className="footer__link" href="/pricing">pricing</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;