import React from "react";
import { useState } from "react";


function TextForm(props) {

    const handleUpClick = ()=>{
        // console.log("Uppercase was called")
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleOnChange = (event)=>{
        // console.log("On change")
        setText(event.target.value);
    }


    const [text,setText] = useState("Enter text here");

    return (
    <>
        <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          id="myBox"
          rows="8"
          onChange={handleOnChange}
        ></textarea>

      </div>
    <button className="btn btn-primary"  onClick={handleUpClick}>Convert to Uppercase</button>
    </>
  );
}

export default TextForm;
