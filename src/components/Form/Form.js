import React from "react";
import "./Form.css";
import csgo from "./assets/csgo.jpeg";
import img1 from "./assets/img1.png";
import img2 from "./assets/img2.png";
import img3 from "./assets/img3.png";
import img4 from "./assets/img4.png";
import img5 from "./assets/img5.png";
import img6 from "./assets/img6.png";

const Form = () => {
  return (
    <div>
      <h2>form</h2>
      <div class="body d-flex flex-column align-items-center gap-5 justify-content-center py-4">
        <section class="form-body position-relative d-flex align-items-center justify-content-center rounded-3">
          <img id="img1" src={img1} alt="" />
          <img id="img2" src={img2} alt="" />
          <img id="img3" src={img3} alt="" />
          <img id="img4" src={img4} alt="" />
          <img id="img5" src={img5} alt="" />
          <img id="img6" src={img6} alt="" />
          <div class="card">
            <img src={csgo} class="card-img-top" alt="csgo" />
            <div class="card-body">
              <h5 class="card-title">Counter Strike Anime Offensive</h5>
              <p class="card-text">
                This is a Counter Strike Anime Offensive card, Anime version.
                With Dragon Lore AWP, So be careful and don't peek mid.
              </p>
              <a href="/" class="btn btn-primary">
                PLAY
              </a>
            </div>
          </div>
        </section>
        <section class="section form-body d-flex align-items-center justify-content-center rounded-3">
          <div class="card">
            <img src={csgo} class="card-img-top" alt="anime" />
            <div class="card-body">
              <h5 class="card-title">Counter Strike Anime Offensive</h5>
              <p class="card-text">
                This is a Counter Strike Anime Offensive card, Anime version.
                With Dragon Lore AWP, So be careful and don't peek mid.
              </p>
              <a href="/" class="btn btn-primary">
                PLAY
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Form;
