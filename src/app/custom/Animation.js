import gsap from "gsap/all";

export default class Animation {
  constructor() {
    this._planets = document.getElementsByClassName("dots");
    this._scaleBtn = document.getElementById("scale-button");
    this._positionBtn = document.getElementById("position-button");
    this._stopBtn = document.getElementById("stop-button");
    this._tl = gsap.timeline({ repeat: -1 });
    this._tl.pause();
  }

  listen() {
    this._scaleBtn.addEventListener("click", () => this._scaleBtnClick());
    this._positionBtn.addEventListener("click", () => this._positionBtnClick());
    this._stopBtn.addEventListener("click", () => this._stopBtnClick());
  }

  async _scaleBtnClick() {
    this._tl.clear();
    this._tl.set(this._planets, { y: 0 });
    this._tl.play();
    this._tl.to(this._planets, {
      scale: 0,
      stagger: 0.1,
      id: "positionStagger",
    });
    await this._tl.to(this._planets, { scale: 1, stagger: 0.1 });
  }
  async _positionBtnClick() {
    this._tl.clear();
    this._tl.set(this._planets, { scale: 1 });
    this._tl.play();
    this._tl.to(this._planets, {
      y: 200,
      stagger: { each: 0.1, from: "edges", id: "scaleStagger" },
    });
    await this._tl.to(this._planets, {
      y: 0,
      stagger: { each: 0.1, from: "edges" },
    });
  }
  _stopBtnClick() {
    this._tl.clear();
    this._tl.set(this._planets, { scale: 1, y: 0 });
  }
}
