import React from 'react';
import Hero from './components/Hero.jsx';
import Products from './components/Products.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import FloatingButtons from './components/FloatingButtons.jsx';

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Products />
      <Footer />

      {/* Botón flotante */}
      <FloatingButtons />
    </>
  );
}

