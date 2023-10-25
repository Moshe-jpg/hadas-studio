import "./App.css";
// import CustomMouse from "./components/CustomMouse";
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
      {/* <CustomMouse /> */}
      <Hero />
      <TextBlock />
      <Gallery />
      <Footer />
    </>
  );
}

export default App;
