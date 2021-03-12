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
                    X
                </button>
            </header>
        </div>
    );
};

export default GenericModal;