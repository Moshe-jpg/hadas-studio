import gsap, { Power3 } from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, Power3);

export const createGalleryAnimation = (root) => {
    let ctx = gsap.context(() => {
      let slides = gsap.utils.toArray(".slide");
  
      gsap.to(slides, {
        xPercent: -100 * (slides.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: ".slider-section",
          pin: true,
          scrub: true,
          end: "+=3000",
          onUpdate: self => {
            let skewAmount = self.getVelocity() / 200;
            let scaleAmount = 1 + Math.abs(self.getVelocity) / 20000;
  
            slides.forEach((slide) => {
              gsap.to(slide.querySelector(".skew-group"), {
                skewX: skewAmount,
                overwrite: true,
                ease: Power3.easeOut
              })
            });
          },
          onScrubComplete: () => {
            slides.forEach((slide) => {
              gsap.to(slide.querySelector(".skew-group"), {
                skewX: 0,
                duration: 0.5,
                ease: Power3.easeOut
              })
            });
          }
        }
      });
    }, root);
  
    return ctx;
  };
  