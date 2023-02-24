import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = ()=>{
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to Uppercase", "success")
  }
  const handleLowerClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lowercase", "success")
  }
  const handleClearClick = ()=>{
    setText("");
    props.showAlert("cleared text", "success")
  }
  const handleCopy = ()=>{
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("copied text", "success")
  }
  const handleExtraspaces = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("extra spaces removed", "success")
  }
  const handleOnChange = (event)=>{
    setText(event.target.value);
  }
  const [text, setText] = useState("")
  return (
    <>
    <div className="container mb-3">
        <h1>Enter your text below:</h1>
        <div div className ="mb-3">
        <textarea className="form-control" id="myBox" rows="8" style = {{backgroundColor: props.mode==='dark'?'grey':'white'}} value={text} onChange={handleOnChange}></textarea>
        </div>
        <button className={`btn btn-${props.mode==='light'?'primary':'dark'} mx-2 my-2`} onClick={handleUpClick}>Convert to Uppercase</button>
        <button className={`btn btn-${props.mode==='light'?'primary':'dark'} mx-2 my-2`} onClick={handleLowerClick}>Convert to Lowercase</button>
        <button className={`btn btn-${props.mode==='light'?'primary':'dark'} mx-2 my-2`} onClick={handleClearClick}>Clear Text</button>
        <button className={`btn btn-${props.mode==='light'?'primary':'dark'} mx-2 my-2`} onClick={handleCopy}>Copy Text</button>
        <button className={`btn btn-${props.mode==='light'?'primary':'dark'} mx-2 my-2`} onClick={handleExtraspaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-5">
      <h1>Text Summary</h1>
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters.</p>
      <p></p>
    </div>
    </>
  )
}
