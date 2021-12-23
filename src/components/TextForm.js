import React, { useState } from "react";
//Declare a new state variable,
// const [text, setText] = useState('Enter the Text Here:');

export default function TextForm(props) {
 
  
  const [text, setText] = useState("Enter the Text");
  const upCLick = () => {
    // console.log("Uppercase was clicked" +text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Change to upper case","success")
  };

  const downClick = function () {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Change to Lower case" , "success")
  };

  const clearClick = function () {
    let newText = "";
    setText(newText);
    props.showAlert("Text Are Clear" , "success")
  };
  const capsClick = function () {
    const arr = text.split(" ");
    for(let i=0;i<arr.length;i++){

      arr[i] = arr[i].charAt(0).toUpperCase()+arr[i].slice(1)
    }
    const text2 = arr.join(" ");


    setText(text2)
    props.showAlert("First Character Is Capitalze" , "success")
  };

  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };
  return (
    <>
      <div className="container" style={{color:props.mode ==='dark' ? 'white' : 'black'}} >
        <h1>{props.head}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            value={text}
            onChange={handleOnChange}
            style={{backgroundColor:props.mode ==='dark' ? 'grey' : 'white' , color:props.mode ==='dark' ? 'white' : 'black'}}
            rows="8"
          ></textarea>
        </div>

        <button className="btn btn-primary " onClick={upCLick}>
          Change to uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={downClick}>
          Change to Lowercase
        </button>
        
        <button className="btn btn-primary mx-2" onClick={clearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary my-2" onClick={capsClick}>
          Caps Text
        </button>
      </div>
      <div className="container my-5" style={{color:props.mode ==='dark' ? 'white' : 'black'}} >
        <h1>Your text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} character</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <p>
          <h3>Preview</h3>
          {text}
        </p>
        <p>Number of Spaces:{text.split(" ").length-1}</p>
      </div>
    </>
  );
}
