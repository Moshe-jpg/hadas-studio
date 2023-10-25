import React from "react";

const TextBlock = () => {
  const scrollToFooter = () => {
    const footerElement = document.querySelector(".footer");
    if (footerElement) {
      footerElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="text-block">
      <div className="container">
        <div className="text-effect">
          <div className="text-overlay"></div>
          <p>Sanctuary of creativity, where inspiration takes form</p>
        </div>
        <div className="text-effect">
          <div className="text-overlay"></div>
          <p>Canvases line walls, anticipating the artist's touch.</p>
        </div>
        <div className="text-effect">
          <div className="text-overlay"></div>
          <p>Colors merge; imagination turns to tangible expression.</p>
        </div>
        <div className="text-effect">
          <div className="text-overlay"></div>
          <p>Messy splendor, where every stain tells stories.</p>
        </div>
        <div className="text-effect">
          <div className="text-overlay"></div>
          <p>Artifacts of dreams scattered across the studio.</p>
        </div>
      </div>
      <button onClick={() => {
        scrollToFooter();
      }}>Start A Project</button>
    </section>
  );
};

export default TextBlock;
