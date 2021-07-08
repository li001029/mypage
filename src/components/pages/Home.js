import React from 'react';
import '../../App.css';
import Cards2 from '../Cards2';
import Cards3 from '../Cards3';
import Cards4 from '../Cards4';
import HeroSection from '../HeroSection';
import Maps from '../googlemaps';
import Footer from '../Footer';

function Home() {
  return (
    <>
      <HeroSection />
      <Cards2/>
      <Cards3/>
      <Maps />
      <Cards4/>
      <Footer />
    </>
  );
}

export default Home;
