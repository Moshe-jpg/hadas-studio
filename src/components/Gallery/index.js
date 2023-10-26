import React, { useLayoutEffect, useRef } from "react";
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

  const galleryRef = useRef();

  useLayoutEffect(() => {
    const ctx = createGalleryAnimation(galleryRef.current);

    return () => ctx.revert(); 
  }, []);

  return (
    <div className="scroll-wrapper" ref={galleryRef}>
      <section className="slider-section">
        <div className="scroll-container">
          <div className="slide">
            <div className="skew-group gallery">
              {galleryImages1.map((gallery, i) => {
                return (
                  <img key={i} src={gallery.imgSrc} alt={gallery.altTag}></img>
                );
              })}
            </div>
          </div>
          <div className="slide">
            <div className="skew-group gallery">
              {galleryImages2.map((gallery, i) => {
                return (
                  <img key={i} src={gallery.imgSrc} alt={gallery.altTag}></img>
                );
              })}
            </div>
          </div>
          <div className="slide">
            <div className="skew-group gallery">
              {galleryImages3.map((gallery, i) => {
                return (
                  <img key={i} src={gallery.imgSrc} alt={gallery.altTag}></img>
                );
              })}
            </div>
          </div>
          <div className="slide">
            <div className="skew-group gallery">
              {galleryImages4.map((gallery, i) => {
                return (
                  <img key={i} src={gallery.imgSrc} alt={gallery.altTag}></img>
                );
              })}
            </div>
          </div>
          <div className="slide">
            <div className="skew-group gallery">
              {galleryImages5.map((gallery, i) => {
                return (
                  <img key={i} src={gallery.imgSrc} alt={gallery.altTag}></img>
                );
              })}
            </div>
          </div>
          <div className="slide">
            <div className="skew-group gallery">
              {galleryImages6.map((gallery, i) => {
                return (
                  <img key={i} src={gallery.imgSrc} alt={gallery.altTag}></img>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Slider;
