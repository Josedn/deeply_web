import './Phone.scss';

const Phone = (props: { className?: string, background?: string }) => {
    const { className, background } = props;

    let finalClassName = "phone";
    if (className != null) {
        finalClassName += " " + className;
    }

    let backgroundImage = undefined;
    if (background != null) {
        backgroundImage = `url(${background})`;
    }

    return (
        <div className={finalClassName}>
            <div className="phone__content" style={{ backgroundImage }}>
            </div>
        </div>
    );
};

export default Phone;