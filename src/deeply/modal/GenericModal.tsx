import './GenericModal.scss';

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
                    Hello world from modal
                </h2>
                <button className="modal__close">
                    <i className="modal__close-icon fas fa-times"></i>
                </button>
            </header>
            <section className="modal__content">
                <div className="app-list__column-left">
                    <h4 className="app-list__title">
                        Categories
                    </h4>
                    <ul className="app-list__list">
                        <li className="app-list__list-item">
                            Instagram
                        </li>
                        <li className="app-list__list-item">
                            Facebook
                        </li>
                    </ul>
                </div>
                <div className="app-list__column-right">
                    <h3 className="app-content__title">
                        Instagram
                    </h3>
                </div>
            </section>

        </div>
    );
};

export default GenericModal;