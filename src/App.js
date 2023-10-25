import "./App.css";
import React, { useEffect } from "react";
import MainAnimations from "./helpers";
import Hero from "./components/Hero";
import TextBlock from "./components/TextBlock";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

function App() {

  useEffect(() => {
    const myApp = new MainAnimations();
  }, []);

  return (
    <>
      <Hero />
      <TextBlock />
      <Gallery />
      <Footer />
    </>
  );
}

export default App;
