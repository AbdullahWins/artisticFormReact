import React from "react";
import "./Form.css";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";
import img5 from "../../assets/img5.png";
import img6 from "../../assets/img6.png";
import CheckBox from "../check-box/CheckBox";
import ShortAnswer from "../short-answer/ShortAnswer";
import MultipleChoice from "../multiple-choice/MultipleChoice";
import DragAndDrop from "../drag-n-drop/DragAndDrop";

const Form = () => {
  //javascript for drag n drop
  document.addEventListener("dragstart", function (event) {
    document.getElementById("dragInput").focus();
    event.dataTransfer.setData("Text", `${event.target.innerHTML} `);
  });

  return (
    <div>
      {/* top navbar */}
      <nav className="navbar fixed-top navbar-expand-lg">
        <div className="container-fluid">
          <p className="navbar-brand">Navbar</p>
          {/* only show in small screens */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <p className="nav-link active" aria-current="page">
                Home
              </p>
              <p className="nav-link">Questions</p>
              <p className="nav-link">Quiz</p>
              <p className="nav-link">About</p>
            </div>
          </div>
        </div>
      </nav>
      <p id="under-nav"></p>
      <div className="body custom-flex flex-column">
        {/* main section */}
        <div className="custom-flex inner-body">
          {/* floating icons */}
          <img id="img1" src={img1} alt="" />
          <img id="img2" src={img2} alt="" />
          <img id="img3" src={img3} alt="" />
          <img id="img4" src={img4} alt="" />
          <img id="img5" src={img5} alt="" />
          <img id="img6" src={img6} alt="" />
          <section className="form-body custom-flex">
            <div className="card">
              <form className="p-4">
                {/* short answer */}
                <ShortAnswer></ShortAnswer>
                <hr />
                {/* multiple choice */}
                <MultipleChoice></MultipleChoice>
                <hr />
                {/* check box */}
                <CheckBox></CheckBox>
                <hr />
                {/* Drag and Drop */}
                <DragAndDrop></DragAndDrop>
              </form>
            </div>
          </section>
        </div>
        {/* another section */}
        <section className="form-body custom-flex">
          <form className="p-4">
            <div className="mb-3">
              <label htmlFor="exampleInputEmail2" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail2"
                aria-describedby="emailHelp"
              ></input>
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div>
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword2"
              ></input>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck2"
              ></input>
              <label className="form-check-label" htmlFor="exampleCheck1">
                Check me out
              </label>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Form;
