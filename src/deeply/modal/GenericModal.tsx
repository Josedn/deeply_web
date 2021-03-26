import './GenericModal.scss';
import instagram from '../images/icons/instagram.svg';

const GenericModal: React.FC = (props) => {
    //const { children } = props;

    return (
        <div className="modal__overlay">
            <ModalContent />
        </div>
    );
};

const ModalContent: React.FC = (props) => {
    //const { children } = props;

    return (
        <div className="modal__container">
            <header className="modal__header">
                <h2 className="modal__title">
                    Supported Apps
                </h2>
                <button className="modal__close">
                    <i className="modal__close-icon fas fa-times"></i>
                </button>
            </header>
            <section className="modal__content">
                <div className="app-list__column-left">
                    <h4 className="app-list__title">
                        Social media
                    </h4>
                    <ul className="app-list__list">
                        <li className="app-list__list-item">
                            <button className="app-list__list-button">
                                Facebook
                            </button>
                        </li>
                        <li className="app-list__list-item">
                            <button className="app-list__list-button app-list__list-button--selected">
                                Instagram
                            </button>
                        </li>
                        <li className="app-list__list-item">
                            <button className="app-list__list-button">
                                YouTube
                            </button>
                        </li>
                        <li className="app-list__list-item">
                            <button className="app-list__list-button">
                                Spotify
                            </button>
                        </li>
                    </ul>
                    <h4 className="app-list__title">
                        Custom
                    </h4>
                    <ul className="app-list__list">
                        <li className="app-list__list-item">
                            <button className="app-list__list-button">
                                Custom deep link
                            </button>
                        </li>
                    </ul>
                </div>
                <div className="app-list__column-right">
                    {/*<div className="app-content__go-back-container">
                        <i className="app-content__go-back-icon fas fa-arrow-left"></i> Back to apps
                    </div>*/}
                    <header className="app-content__header">
                        <img className="app-content__image" src={instagram} alt="test"></img>
                        <h3 className="app-content__title">
                            Instagram
                        </h3>
                    </header>
                    <section className="app-content__subtitle">
                        <strong>We currently support the following types</strong>
                        <br />
                        Select a type to see more details
                    </section>
                    <section className="app-content__options">
                        <ul className="app-content__type-list">
                            <li className="app-content__type-item">
                                <button className="app-content__type-button">
                                    Home
                                </button>
                            </li>
                            <li className="app-content__type-item">
                                <button className="app-content__type-button app-content__type-button--selected">
                                    Profile
                                </button>
                            </li>
                            <li className="app-content__type-item">
                                <button className="app-content__type-button">
                                    Tag
                                </button>
                            </li>
                        </ul>
                    </section>
                    <section className="app-content__preview">
                        <div className="app-content__preview-box">
                            <div className="app-content__preview-title">URL format</div>
                            <div className="app-content__preview-content">instagram.com/<span className="app-content__preview-highlight">&lt;profile&gt;</span></div>
                        </div>
                    </section>
                </div>
            </section>

        </div>
    );
};

export default GenericModal;