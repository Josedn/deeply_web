import './Services.scss';
import instagram from '../../../images/icons/instagram.svg';
import facebook from '../../../images/icons/facebook.svg';
import youtube from '../../../images/icons/youtube.svg';
import tiktok from '../../../images/icons/tiktok.svg';
import amazon from '../../../images/icons/amazon.svg';

const Services = () => {
    return (
        <>
            <div className="services">
                <div className="services__container">
                    <h3 className="services__title">Popular apps to deep link into</h3>
                    <div className="services__grid">
                        <div className="service__item">
                            <button className="service__item-button">
                                <img className="service__item-image" src={instagram} alt="test"></img>
                            </button>
                        </div>
                        <div className="service__item">
                            <button className="service__item-button">
                                <img className="service__item-image" src={facebook} alt="test"></img>
                            </button>
                        </div>
                        <div className="service__item">
                            <button className="service__item-button">
                                <img className="service__item-image" src={youtube} alt="test"></img>
                            </button>
                        </div>
                        <div className="service__item">
                            <button className="service__item-button">
                                <img className="service__item-image" src={tiktok} alt="test"></img>
                            </button>
                        </div>
                        <div className="service__item">
                            <button className="service__item-button">
                                <img className="service__item-image" src={amazon} alt="test"></img>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Services;