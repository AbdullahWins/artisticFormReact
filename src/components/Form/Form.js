import React from "react";
import "./Form.css";
import CheckBox from "../check-box/CheckBox";
import ShortAnswer from "../short-answer/ShortAnswer";
import MultipleChoice from "../multiple-choice/MultipleChoice";
import DragAndDrop from "../drag-n-drop/DragAndDrop";
import Nav from "../Nav/Nav";
import DummySection from "../DummySection/DummySection";
import Icons from "../icons/Icons";

const Form = () => {
  return (
    <div>
      <Nav></Nav>
      <div className="body custom-flex flex-column">
        {/* main section */}
        <div className="custom-flex inner-body">
          {/* floating icons */}
          <Icons></Icons>
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
                {/* drag and drop */}
                <DragAndDrop></DragAndDrop>
              </form>
            </div>
          </section>
        </div>
        {/* dummy section here */}
        <DummySection></DummySection>
      </div>
    </div>
  );
};

export default Form;
