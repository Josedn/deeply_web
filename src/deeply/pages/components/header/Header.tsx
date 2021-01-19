import './Header.scss';

const Header = () => {
    return (
        <header className="header">
            <div className="header__container">
                <h1 className="header__logo">
                    <a className="header__logo-link" href="/">deeply</a>
                </h1>
                <ul className="header__navigator">
                    <li className="navigator__item">
                        <button className="navigator__button">My links</button>
                    </li>
                    <li className="navigator__item">
                        <button className="navigator__button">Pricing</button>
                    </li>
                    <li className="navigator__item">
                        <button className="navigator__button">About</button>
                    </li>
                </ul>
                <ul className="header__options">
                    <li className="options__item">
                        <button className="options__button"><div>Sign in</div><i className="options__button-icon fas fa-chevron-right"></i></button>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;