import React from 'react';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Hero from '../components/hero/Hero';
import './Home.scss';

const Home = () => {
    return (
        <>
            <Header />
            <Hero />
            <Footer />
        </>
    );
};

export default Home;