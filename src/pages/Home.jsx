import React from 'react';
import Hero from '../components/Hero/Hero';
import PlanetSection from '../components/PlanetSection/PlanetSection';
import VideoSection from '../components/videoSection/VideoSection';
import FactsSection from '../components/FactsSection/FactsSection';
import ContactForm from '../components/ContactForm/ContactForm';
import Footer from '../components/Footer/Footer';

const Home = () => {
  return (
    <>
      <main className='main-content'>
        {/* Hero Section */}
        <Hero />

        {/* Video Section */}
        <VideoSection />

        {/* Planet Section */}
        <PlanetSection />

        {/* Table Section */}
        <FactsSection />

        {/* Contact Form */}
        <ContactForm />

        <hr aria-hidden='true' />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Home;
