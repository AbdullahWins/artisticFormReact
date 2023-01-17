import React from "react";
import "./MultipleChoice.css";

const MultipleChoice = () => {
  return (
    <div className="container">
      <div className="question">
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
  );
};

export default MultipleChoice;
