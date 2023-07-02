import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClr = ()=>{
        let newText = " ";
        setText(newText);
    }
    const handleCopy = () =>{
        var text = document.getElementById("myText");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard!" , "success")
    }

    const handleOnChange = (event)=>{
        setText(event.target.value)
    }

    const [text, setText] = useState('');

    return (
        <>
        <div className = "container" style={{color : props.mode==='dark'?'white':'black'}} >
            <h1>{props.heading}  </h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode==='dark'?'grey':'white',
             color:props.mode==='dark'?'white':'#042743'}} id="myText" rows="8"></textarea>
            </div>
            <button className="btn btn-outline-primary mx-2 " onClick={handleUpClick}> Uppercase </button>
            <button className="btn btn-outline-primary mx-1" onClick={handleLoClick}> Lowercase </button>
            <button className="btn btn-outline-primary mx-1" onClick={handleClr}> Clear </button>
            <button className="btn btn-outline-primary mx-1" onClick={handleCopy}> Copy </button>
          
            
        </div>
        <div className = "container my-3" style={{color : props.mode==='dark'?'white':'black'}}>
            <h3>Your text summary</h3>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h4>Preview</h4>
            <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>

        </div>
        </>
    )
}
