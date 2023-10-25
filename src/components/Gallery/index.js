import React, { useLayoutEffect, useRef } from 'react';
import { createGalleryAnimation } from '../../galleryFunc';
import girl90s from "../../assets/90s-girl.JPG";

const Slider = () => {
  const galleryImages = [
    {
      imgSrc: girl90s,
      altTag: "",
      caption: "90s Girl",
    },
    {
      imgSrc: girl90s,
      altTag: "",
      caption: "90s Girl",
    },
    {
      imgSrc: girl90s,
      altTag: "",
      caption: "90s Girl",
    },
    {
      imgSrc: girl90s,
      altTag: "",
      caption: "90s Girl",
    },
  ];

  const galleryRef = useRef();

  useLayoutEffect(() => {
    const ctx = createGalleryAnimation(galleryRef.current);

    return () => ctx.revert(); // This will clean up the animations when the component unmounts
  }, []);



  return (
    <div className="scroll-wrapper" ref={galleryRef}>
      <section className="slider-section">
        <div className="scroll-container">
          <div className="slide">
            <div className="skew-group gallery">
              {galleryImages.map((gallery, i) => {
                return (
                  <img key={i} src={gallery.imgSrc} alt={gallery.altTag}></img>
                );
              })}
            </div>
          </div>
          <div className="slide">
            <div className="skew-group gallery">
              {galleryImages.map((gallery, i) => {
                return (
                  <img key={i} src={gallery.imgSrc} alt={gallery.altTag}></img>
                );
              })}
            </div>
          </div>
          <div className="slide">
            <div className="skew-group gallery">
              {galleryImages.map((gallery, i) => {
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
