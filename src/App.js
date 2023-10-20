import './App.css';
import React, { useEffect } from "react"
import AppLenis from './helpers';
import Hero from './components/Hero';
import TextBlock from './components/TextBlock';
import FullWidthImage from './components/FullWidthImage';
import Footer from './components/Footer';

function App() {

  useEffect(() => {
    const myApp = new AppLenis();
    
  }, []); 
  return (
    <>
    <Hero />
    <TextBlock />
    <FullWidthImage />
    <Footer />
    </>
  );
}

export default App;
