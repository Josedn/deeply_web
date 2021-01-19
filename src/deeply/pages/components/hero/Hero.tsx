import React from 'react';
import './Hero.scss';
import Phone from './phone/Phone';
import screenshot from '../../../images/instagram1.png';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero__container">
                <div className="hero__column hero__column--left">
                    <h2 className="hero__title">
                        Deep linking
                        <br></br>
                        made easy
                    </h2>
                    <div className="hero__description">
                        Millions of companies of all sizes—from startups to Fortune 500s—use Stripe’s software and APIs to accept payments, send payouts, and manage their businesses online.
                    </div>
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