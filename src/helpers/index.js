import Lenis from "@studio-freight/lenis";
import gsap, { Power3, Expo } from "gsap";
import { ScrollTrigger } from "gsap/all";

class MainAnimations {
  constructor() {
    this.heroImages = [...document.querySelectorAll(".hero-images img")];
    this.texts = [...document.querySelectorAll(".text-effect")];
    this._initialize();
    this._render();
  }
  _initialize() {
    this._setInitialStates();
    this._createLenis();
    this._createIntro();
    this._createHero();
    this._createTextAnimation();
  }

  _setInitialStates() {
    let mm = gsap.matchMedia();

    gsap.registerPlugin(ScrollTrigger, Power3, Expo);

    gsap.set(".hero-title span, .text-effect p", {
      y: 32,
      opacity: 0,
    });

    mm.add("(min-width: 999.1px)", () => {
      gsap.set(".hero-images img", {
        opacity: 0,
        y: gsap.utils.random(100, 50),
      });
    });

    mm.add("(max-width: 999px)", () => {
      gsap.set(".hero-images img", {
        opacity: 0,
        clipPath: "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)",
      });
    });
  }

  _createLenis() {
    this.lenis = new Lenis({
      lerp: 0.1,
    });
  }

  _createIntro() {
    const tl = gsap.timeline();
    let mm = gsap.matchMedia();
    mm.add("(min-width: 999.1px)", () => {
      tl.to(".hero-title div", {
        opacity: 1,
      })
        .to(".hero-title span", {
          y: 0,
          opacity: 1,
          ease: Expo.easeOut,
          stagger: 0.03,
        })
        .to(
          ".hero-images img",
          {
            opacity: 1,
            y: 0,
            ease: Power3.easeOut,
            duration: 2,
            stagger: 0.04,
          },
          "-=1"
        );
    });

    mm.add("(max-width: 999px)", () => {
      tl.to(".hero-title div", {
        opacity: 1,
      })
        .to(".hero-title span", {
          y: 0,
          opacity: 1,
          ease: Expo.easeOut,
          stagger: 0.09,
        })
        .to(
          ".hero-images img",
          {
            opacity: 1,
            ease: Power3.easeOut,
            duration: 2,
            stagger: 0.3,
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          },
          "-=1"
        );
    });
  }

  _createHero() {
    let mm = gsap.matchMedia();
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    this.heroImages.forEach((img) => {
      mm.add("(min-width: 999.1px)", () => {
        tl.to(
          img,
          {
            ease: "none",
            yPercent: gsap.utils.random(-100, -50),
          },
          0
        );
      });
    });
  }

  _createTextAnimation() {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".text-block",
        start: "top center",
        end: "bottom top",
        scrub: 1.5,
      },
    });

    this.texts.forEach((text, i) => {
      const overlay = text.querySelector(".text-overlay");
      const content = text.querySelector("p");

      tl.to(overlay, {
        scaleX: 0,
      }).to(
        content,
        {
          opacity: 1,
          y: 1,
          ease: Expo.easeOut,
          duration: 2,
          delay: () => i * 0.1,
        },
        0
      );
    });
  }

  _render(time) {
    if (this.lenis && this.lenis.raf) {
      this.lenis.raf(time);
    }
    requestAnimationFrame(this._render.bind(this));
  }
}

export default MainAnimations;
