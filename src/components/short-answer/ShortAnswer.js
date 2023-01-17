import React from "react";
import "./ShortAnswer.css";

const ShortAnswer = () => {
  return (
    <div>
      <label htmlFor="exampleInputPassword1" className="form-label">
        1. Provide short answer here.
        <span data-toggle="tooltip" data-placement="left" title="Short Answers">
          <i className="fa-solid fa-circle-info"></i>
        </span>
      </label>
      <input
        type="name"
        className="form-control"
        id="exampleInputPassword1"
      ></input>
    </div>
  );
};

export default ShortAnswer;
