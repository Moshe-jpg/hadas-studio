import React from "react";
import fullWidthImage from "../../assets/full-width-image.JPG";

const FullWidthImage = () => {
  return (
    <section className="full-width-image">
      <div className="full-width-image-overlay"></div>
      <div className="full-width-image-text">
        <h2>Latest Piece</h2>
        <p>
          Vivid, stirring hues intertwine, crafting a visual symphony, evoking
          profound emotions, while challenging perceptions with its bold
          intricacy.
        </p>
      </div>
      <img src={fullWidthImage} alt="Full width art"></img>
    </section>
  );
};

export default FullWidthImage;
