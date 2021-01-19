import './Home.scss';

const Home = () => {
    return (
        <>
            <header className="header">
                <div className="header__logo">
                    Deeply.to
                </div>
                <ul className="header__navigator">
                    <li className="navigator__item">
                        My links
                    </li>
                    <li className="navigator__item">
                        About
                    </li>
                </ul>
                <ul className="header__options">
                    <li className="options__item">
                        Sign in
                    </li>
                    <li className="options__item">
                        Try free
                    </li>
                </ul>
            </header>

            <div className="content">
                <div className="content__item">
                </div>
                <div className="content__item">
                </div>
            </div>

            <footer className="footer">
                &copy; 2021
            </footer>
        </>
    );
};

export default Home;