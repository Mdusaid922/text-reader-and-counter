import React,{useState}from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');
    
    const handleUpClick =()=>{
        let newtext = text.toUpperCase();
        setText(newtext)
        props.showalt("converted to upper case", "success");

    }
    const handlelowClick =()=>{
      let newtext = text.toLowerCase();
      setText(newtext)

  }
  const handleclearClick =()=>{
    let newtext = '';
    setText(newtext)

}
    const handleonchange =(event)=>{
        setText(event.target.value)

    }
   
  return (
    <>
    <div className='container' style={{color:props.mode==='light'?'dark':'white'}}>
      <h1>{props.heading}</h1>
        <div className="mb-3">
          <label for="myBox" className="form-label"></label>
          <textarea className="form-control" style={{backgroundColor: props.mode==='dark'?'#001a4d':'white' ,color:props.mode==='dark'?'white':'dark'}} value={text} onChange={handleonchange} id="myBox" rows="8"></textarea>
        </div>
            <button className="btn btn-primary m-2 " onClick={handleUpClick}>conver to uppercase</button>
            <button className="btn btn-primary m-2 " onClick={handlelowClick}>conver to lowercase</button>
            <button className="btn btn-primary m-2 " onClick={handleclearClick}>clear</button>

      </div> 
    <div className="container my-3" style={{backgroundColor: props.mode==='dark'?'#001a4d':'white' ,color:props.mode==='dark'?'white':'dark'}}>
      <h1>your text summary</h1>
      <p>{text.split(" ").filter((element)=>{return element.length!==0}) .length} words {text.length} charecters</p>
      <p>{0.008*text.split(" ").length} minutes to read </p>
      <h2>preview</h2>
      <p>{text.length>0 ?text:'write some text to previwe'}</p>
    </div>
    </>
  )
}
