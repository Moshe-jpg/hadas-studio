import React from "react";
import bebe from "../../assets/bebe.JPG";
import butterfly from "../../assets/butterfly.JPG";
import car from "../../assets/car.JPG";
import girl from "../../assets/girl.JPG";
// import invitation from "../../assets/invitation.JPG";
import rabbit from "../../assets/rabbit.JPG";
import rabbits from "../../assets/rabbits.JPG";
import sailboat from "../../assets/sailboat.JPG";
// import shoes from "../../assets/shoes.JPG";
// import spongebob from "../../assets/spongebob.JPG";
// import tiger from "../../assets/tiger.JPG";

const HeroImages = () => {
  const images = [
    {
      imgSrc: bebe,
      altTag: "Baby Girl art",
    },
    {
      imgSrc: butterfly,
      altTag: "Butterfly art",
    },
    {
      imgSrc: car,
      altTag: "Car art",
    },
    {
      imgSrc: rabbits,
      altTag: "Rabbits art",
    },

    // {
    //   imgSrc: invitation,
    //   altTag: "Invitation art",
    // },
    {
      imgSrc: rabbit,
      altTag: "Rabbit art",
    },

    {
      imgSrc: sailboat,
      altTag: "Sailboat art",
    },
    {
      imgSrc: girl,
      altTag: "Girl art",
    },
    // {
    //   imgSrc: shoes,
    //   altTag: "Shoes art",
    // },
    // {
    //   imgSrc: spongebob,
    //   altTag: "Spongebob art",
    // },
    // {
    //   imgSrc: tiger,
    //   altTag: "Tiger art",
    // },
  ];

  return (
    <div className="hero-images">
      {images.map((img, i) => {
        return (
          <img key={i} src={img.imgSrc} alt={img.altTag} data-hidden></img>
        );
      })}
    </div>
  );
};

export default HeroImages;
