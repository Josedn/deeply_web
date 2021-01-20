import React from 'react';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Hero from '../components/hero/Hero';
import Services from '../components/services/Services';
import './Home.scss';

const Home = () => {
    return (
        <>
            <Header />
            <Hero />
            <Services />
            <Footer />
        </>
    );
};

export default Home;