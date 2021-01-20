import React, { useEffect } from 'react';
import './Hero.scss';
import Phone from './phone/Phone';
import screenshot from '../../../images/instagram1.png';
import Gradient from '../../../styles/stripe.gradient';

const Hero = () => {
    useEffect(() => {
        const gradient = new Gradient();
        gradient.initGradient(".gradient__canvas");
        console.log(gradient);
    }, []);

    return (
        <section className="hero">
            <div className="hero__container">
                <div className="hero__column hero__column--left">
                    <div className="hero__gradient">
                        <canvas className="gradient__canvas"></canvas>
                    </div>
                    <h2 className="hero__title">
                        Deep linking
                        <br></br>
                        made easy
                    </h2>
                    <div className="hero__description">
                        Millions of companies of all sizes—from startups to Fortune 500s—use Stripe’s software and APIs to accept payments, send payouts, and manage their businesses online.
                    </div>
                    <footer className="hero__footer">
                        <button className="hero__button">
                            <div>Start now</div><i className="hero__button-icon fas fa-chevron-right"></i>
                        </button>
                    </footer>
                </div>

                <div className="hero__column hero__column--right">
                    <div className="hero__preview-container">
                        <Phone className="hero__preview-phone-first" background={screenshot} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;