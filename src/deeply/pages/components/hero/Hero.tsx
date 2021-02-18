import React, { useEffect } from 'react';
import './Hero.scss';
import Phone from './phone/Phone';
//import Gradient from '../../../styles/stripe.gradient';
import flmsck_web from '../../../images/screenshots/flmstck_web.jpg';
import flmsck_app from '../../../images/screenshots/flmstck_app.jpg';

const Hero = () => {
    useEffect(() => {
        //const gradient = new Gradient();
        //gradient.initGradient(".gradient__canvas");
    }, []);

    return (
        <section className="hero">
            <div className="hero__gradient">
                <canvas className="gradient__canvas"></canvas>
            </div>
            <div className="hero__container">
                <div className="hero__column hero__column--left">
                    <h2 className="hero__title">
                        Deep linking
                        <br></br>
                        made easy
                    </h2>
                    <div className="hero__description">
                        Deep link into any app from any campaig. No SDK required
                    </div>
                    <footer className="hero__footer">
                        <button className="hero__button">
                            <div>Start now</div><i className="hero__button-icon fas fa-chevron-right"></i>
                        </button>
                    </footer>
                </div>

                <div className="hero__column hero__column--right">
                    <div className="hero__preview-container">
                        <div className="preview__link-caption">one link for everything</div>
                        <div className="preview__link-container">
                            <a className="preview__link" target="_blank" href="/">deeply.to/fku42o</a>
                        </div>
                        <div className="preview__phone-container">
                            <div className="preview__phones-column">
                                <h4 className="preview__phones-caption">app installed</h4>
                                <Phone className="preview__phone" background={flmsck_app} />
                            </div>
                            <div className="preview__phones-column">
                                <h4 className="preview__phones-caption">app not installed</h4>
                                <Phone className="preview__phone" background={flmsck_web} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;