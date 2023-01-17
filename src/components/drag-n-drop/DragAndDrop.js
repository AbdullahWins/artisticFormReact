import React from "react";
import "./DragAndDrop.css";

const DragAndDrop = () => {
  return (
    <div>
      <div className="custom-flex" id="buttons">
        <p className="custom-bg" draggable="true" id="1">
          Drag
        </p>
        <p className="custom-bg" draggable="true" id="2">
          And
        </p>
        <p className="custom-bg" draggable="true" id="3">
          Drop
        </p>
      </div>
      <div className="custom-flex">
        <input
          id="dragInput"
          name="dragInput"
          type="text"
          placeholder="drop here"
        />
      </div>
    </div>
  );
};

export default DragAndDrop;
