import './Hero.scss';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero__container">
                <div className="hero__column hero__column--left">
                    <h2 className="hero__title">
                        Payments infrastructure for the internet
                    </h2>
                    <div className="hero__description">
                        Millions of companies of all sizes—from startups to Fortune 500s—use Stripe’s software and APIs to accept payments, send payouts, and manage their businesses online.
                    </div>
                </div>

                <div className="hero__column hero__column--right">

                </div>
            </div>
        </section>
    );
};

export default Hero;