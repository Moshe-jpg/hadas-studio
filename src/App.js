import "./App.css";
import React, { useEffect } from "react";
import MainAnimations from "./helpers/mainAnimations";
import Hero from "./components/Hero";
import TextBlock from "./components/TextBlock";
import Slider from "./components/Slider";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    const myApp = new MainAnimations();
    
  }, []); //

  return (
    <>
      <Hero />
      <TextBlock />
      <Slider />
      <Footer />
    </>
  );
}

export default App;
