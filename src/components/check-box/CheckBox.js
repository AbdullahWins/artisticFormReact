import React from "react";
import "./CheckBox.css";

const CheckBox = () => {
  return (
    <div>
      <div className="form-check">
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
    </div>
  );
};

export default CheckBox;
