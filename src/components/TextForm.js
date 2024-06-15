import React,{useState} from 'react'
export default function TextForm(props){
    const handleupclick=()=>{
        console.log("Text is"+text);
        let newtxt=text.toUpperCase();
        setText(newtxt);

    }
    const handledownclick=()=>{
        console.log("Text is"+text);
        let newtxt=text.toLowerCase();
        setText(newtxt);

    }
    const del=()=>{
        console.log("Text is"+text);
        let newtxt="";
        setText(newtxt);

    }
    const handleonchange=(event)=>{
        //console.log("on change");
        setText(event.target.value);
    }
    const [text,setText]=useState('');
    // setText("new text");
    return (
        <>
    <div>
           
 
  
    <h1>{props.heading}</h1>
    <div className="form-group">
        
        <textarea className="form-control" placeholder="Enter text here" value={text} onChange={handleonchange} id="myBox" rows="8"></textarea>
    </div>
    <button className='btn btn-primary my-3 mx-2' onClick={handleupclick}>Convert to Uppercase</button>
    <button className='btn btn-primary margin-left-5' onClick={handledownclick}>Convert to Lowercase</button>
    <button className='btn btn-primary my-3 mx-2' onClick={del}>Clear Text</button>
        </div>
    <div>
    <h1>Your Text Summary</h1>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    </div>
    </>
    )
}
