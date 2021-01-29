import gsap from "gsap/all";

export default class Animation {
  constructor() {
    this._planets = document.getElementsByClassName("dots");
    this._scaleBtn = document.getElementById("scale-button");
    this._positionBtn = document.getElementById("position-button");
    this._stopBtn = document.getElementById("stop-button");
    this._tl = gsap.timeline({ repeat: -1 });
  }

  listen() {
    this._scaleBtn.addEventListener("click", () => this._scaleBtnClick());
    this._positionBtn.addEventListener("click", () => this._positionBtnClick());
    this._stopBtn.addEventListener("click", () => this._stopBtnClick());
  }

  async _scaleBtnClick() {
    this._tl.clear();
    this._tl.set(this._planets, { y: 0 });
    this._tl.to(this._planets, {
      scale: 0,
      duration: 1,
      id: "positionStagger",
      stagger: {
        amount: 1,
        repeat: -1,
        yoyo: true,
      },
    });
  }
  async _positionBtnClick() {
    this._tl.clear();
    this._tl.set(this._planets, { scale: 1 });
    this._tl.to(this._planets, {
      y: 50,
      duration: 1,
      id: "scaleStagger",
      stagger: { amount: 0.5, from: "edges", yoyo: true, repeat: -1 },
    });
  }
  _stopBtnClick() {
    this._tl.clear();
    this._tl.set(this._planets, { scale: 1, y: 0 });
  }
}
