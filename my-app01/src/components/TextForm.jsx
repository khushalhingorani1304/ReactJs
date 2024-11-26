import React from "react";
import { useState } from "react";


function TextForm(props) {

    const handleUpClick = ()=>{
        // console.log("Uppercase was called")
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase Successfully","success")
    }

    const handleLoClick = ()=>{
        // console.log("Uppercase was called")
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase Successfully","success")
    }

    const handleClearClick = ()=>{
        // console.log("Uppercase was called")
        let newText = "";
        setText(newText)
        props.showAlert("Text Cleared","success")
    }

    const handleOnChange = (event)=>{
        // console.log("On change")
        setText(event.target.value);
    }

    const handleCopy = () =>{
      let text = document.getElementById('myBox');
      text.select();
      navigator.clipboard.writeText(text.value);
      document.getSelection().removeAllRanges();
      props.showAlert("Copied to Clipboard","success")
    }

    const handleExtraSpaces = () =>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Removed Extra Spaces","success")
      
    }

    const handleSpaces = () =>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(""));
      props.showAlert("All Spaces Removed Successfully","success")
      
    }


    const [text,setText] = useState("Enter text here");

    return (
    <>
    <div className="conatiner">
        <h1 className="mb-3">{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          id="myBox"
          rows="8"
          onChange={handleOnChange}
        ></textarea>

      </div>
    <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2"  onClick={handleUpClick}>Convert to Uppercase</button>
    <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2"  onClick={handleLoClick}>Convert to Lowercase</button>
    <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2"  onClick={handleClearClick}>Clear Text</button>
    <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2"  onClick={handleCopy}>Copy Text</button>
    <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2"  onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2"  onClick={handleSpaces}>Remove Spaces</button>
    </div>

      <div className="container my-3">
        <h2>Your text summary</h2>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters!</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes Read</p>
        
        <h3>Preview</h3>
        <p>{text.length!=0 ? text : "Nothing to Preview!"}</p>

      </div>

    </>
  );
}

export default TextForm;
