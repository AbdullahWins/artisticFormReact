import React from "react";
import "./Icons.css";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";
import img5 from "../../assets/img5.png";
import img6 from "../../assets/img6.png";

const Icons = () => {
  return (
    <div>
      <img id="img1" src={img1} alt="" />
      <img id="img2" src={img2} alt="" />
      <img id="img3" src={img3} alt="" />
      <img id="img4" src={img4} alt="" />
      <img id="img5" src={img5} alt="" />
      <img id="img6" src={img6} alt="" />
    </div>
  );
};

export default Icons;
