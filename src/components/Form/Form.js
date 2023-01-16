import React from "react";
import "./Form.css";
import img1 from "./assets/img1.png";
import img2 from "./assets/img2.png";
import img3 from "./assets/img3.png";
import img4 from "./assets/img4.png";
import img5 from "./assets/img5.png";
import img6 from "./assets/img6.png";

const Form = () => {
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
      <div className="body custom-flex flex-column gap-5 py-4">
        {/* main section */}
        <section className="form-body position-relative custom-flex rounded-3">
          {/* floating icons */}
          <img id="img1" src={img1} alt="" />
          <img id="img2" src={img2} alt="" />
          <img id="img3" src={img3} alt="" />
          <img id="img4" src={img4} alt="" />
          <img id="img5" src={img5} alt="" />
          <img id="img6" src={img6} alt="" />
          <div className="card">
            <form className="p-4">
              {/* short answer */}
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  1. Provide short answer here.
                  <span
                    data-toggle="tooltip"
                    data-placement="left"
                    title="Short Answers"
                  >
                    <i className="fa-solid fa-circle-info"></i>
                  </span>
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                ></input>
              </div>
              <hr />
              {/* multiple choice */}
              <div className="container my-1">
                <div className="question pt-2">
                  <div>
                    <p>
                      2. Multiple choice question here.
                      <span
                        data-toggle="tooltip"
                        data-placement="left"
                        title="Multiple Choice"
                      >
                        <i className="fa-solid fa-circle-info"></i>
                      </span>
                    </p>
                  </div>
                  <div className="pt-3" id="options">
                    <label className="options">
                      Okay
                      <input type="radio" name="radio"></input>
                      <span className="checkmark"></span>
                    </label>
                    <label className="options">
                      Yes
                      <input type="radio" name="radio"></input>
                      <span className="checkmark"></span>
                    </label>
                    <label className="options">
                      Works!
                      <input type="radio" name="radio"></input>
                      <span className="checkmark"></span>
                    </label>
                    <label className="options">
                      Not cool
                      <input type="radio" name="radio"></input>
                      <span className="checkmark"></span>
                    </label>
                  </div>
                </div>
              </div>
              <hr />
              {/* check box */}
              <div className="my-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                ></input>
                <label className="form-check-label" htmlFor="exampleCheck1">
                  3. Check this
                  <span
                    data-toggle="tooltip"
                    data-placement="left"
                    title="Check Please"
                  >
                    <i className="fa-solid fa-circle-info"></i>
                  </span>
                </label>
              </div>
            </form>
            {/* Drag and Drop */}
            <div>
              <div id="buttons">
                <p draggable="true" id="1">
                  Drag
                </p>
                <p draggable="true" id="2">
                  And
                </p>
                <p draggable="true" id="3">
                  Drop
                </p>
              </div>
              <input id="dragInput" name="dragInput" type="text" />
            </div>
          </div>
        </section>
        {/* another section */}
        <section className="section form-body custom-flex rounded-3">
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
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword2"
              ></input>
            </div>
            <div className="mb-3 form-check">
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
