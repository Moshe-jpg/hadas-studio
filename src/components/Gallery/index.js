import React, { useLayoutEffect, useRef, useState, useEffect } from "react";
import { createGalleryAnimation } from "../../galleryFunc";
import girl90s from "../../assets/90s-girl.webp";
import bebe from "../../assets/bebe.webp";
import bootsSketch from "../../assets/boots-sketch.webp";
import butterfly from "../../assets/butterfly.webp";
import butterflySkeleton from "../../assets/butterfly-skeleton.webp";
import car from "../../assets/car.webp";
import chlorine from "../../assets/chlorine.webp";
// import fullWidthImage from "../../assets/full-width-image.webp";
import girlSketchImage from "../../assets/girl-sketch.webp";
import girl from "../../assets/girl.webp";
import invitation from "../../assets/invitation.webp";
import pineapple from "../../assets/pineapple.webp";
import rabbit from "../../assets/rabbit.webp";
import rabbits from "../../assets/rabbits.webp";
import sailboat from "../../assets/sailboat.webp";
import shoes from "../../assets/shoes.webp";
import spongebob from "../../assets/spongebob.webp";
import tiger from "../../assets/tiger.webp";
import yamSuf from "../../assets/yam-suf.webp";

const Slider = () => {
  const galleryImages1 = [
    {
      imgSrc: girl90s,
      altTag: "Girl form the 90s",
    },
    {
      imgSrc: bebe,
      altTag: "Baby",
    },
    {
      imgSrc: bootsSketch,
      altTag: "boots sketch",
    },
  ];
  const galleryImages2 = [
    {
      imgSrc: butterflySkeleton,
      altTag: "butterfly skeleton sketch",
    },
    {
      imgSrc: car,
      altTag: "car",
    },
    {
      imgSrc: girlSketchImage,
      altTag: "girl",
    },
  ];
  const galleryImages3 = [
    {
      imgSrc: pineapple,
      altTag: "pineapple",
    },
    {
      imgSrc: sailboat,
      altTag: "sailboat",
    },
    {
      imgSrc: girl,
      altTag: "girl",
    },
  ];
  const galleryImages4 = [
    {
      imgSrc: rabbit,
      altTag: "rabbit",
    },
    {
      imgSrc: rabbits,
      altTag: "rabbits",
    },

    {
      imgSrc: shoes,
      altTag: "shoes",
    },
  ];
  const galleryImages5 = [
    {
      imgSrc: spongebob,
      altTag: "spongebob",
    },
    {
      imgSrc: tiger,
      altTag: "tiger",
    },
    {
      imgSrc: yamSuf,
      altTag: "yam suf",
    },
  ];

  const galleryImages6 = [
    {
      imgSrc: butterfly,
      altTag: "butterfly",
    },
    {
      imgSrc: invitation,
      altTag: "invitation",
    },
    {
      imgSrc: chlorine,
      altTag: "chlorine",
    },
  ];

  const groupImagesForSlides = (images, screenSize) => {
    let groupSize;

    if (screenSize > 999) {
      groupSize = 3; // 3 images per slide for screens wider than 999px
    } else {
      groupSize = 1; // 1 image per slide for screens smaller than 768px
    }

    const groupedImages = [];
    for (let i = 0; i < images.length; i += groupSize) {
      groupedImages.push(images.slice(i, i + groupSize));
    }

    return groupedImages;
  };

  const galleryRef = useRef();

  useLayoutEffect(() => {
    const ctx = createGalleryAnimation(galleryRef.current);

    return () => ctx.revert();
  }, []);

  const [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const allImages = [
    galleryImages1,
    galleryImages2,
    galleryImages3,
    galleryImages4,
    galleryImages5,
    galleryImages6,
  ];
  const groupedImages = allImages.flatMap((images) =>
    groupImagesForSlides(images, screenSize)
  );

  return (
    <div className="scroll-wrapper" ref={galleryRef}>
      <section className="slider-section">
        <div className="scroll-container">
          {groupedImages.map((group, index) => (
            <div className="slide" key={index}>
              <div className="skew-group gallery">
                {group.map((image, i) => (
                  <img key={i} src={image.imgSrc} alt={image.altTag} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Slider;
