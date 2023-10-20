import Lenis from "@studio-freight/lenis";

class AppLenis {
  constructor() {
    this._initialize();
    this._render();
  }
  _initialize() {
    this._createLenis(); // change this line to use the correct method name
  }
  _createLenis() {
    this.lenis = new Lenis({
      lerp: 0.1,
    });
  }
  _render(time) {
    if (this.lenis && this.lenis.raf) { // check if 'lenis' and 'lenis.raf' are defined
      this.lenis.raf(time);
    }
    requestAnimationFrame(this._render.bind(this));
  }
}

export default AppLenis;