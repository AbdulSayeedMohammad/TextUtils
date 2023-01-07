import React, {useState} from 'react'
export default function Textareas(props) {
  
  const [text,setText]=useState('');

    const changetoupper =()=>{
        let newtext=text.toUpperCase();
        setText(newtext);
        props.showAlert('converted to Upper Case...!','success');
    }
    const changetolower =()=>{
      let newtext=text.toLowerCase();
      setText(newtext);
      props.showAlert('converted to Lower Case...!','success');
  }
    const onchange=(event)=>
    {
        setText(event.target.value)
    }
    const cleartext=()=>{
      let newText="";
      setText(newText);
      props.showAlert('Text has been CLEARED...!','danger');
  }
    const changetoInversion=()=>{
        const newText = text.replace(/./g, (c) =>
          c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()
        );
        setText(newText);
        props.showAlert('Text Inverted Successfully...!','success');
      }
      const TitleCase=()=>{
        let txtarry=text.split(" ");
        let rst="";
        for(let i=0;i<txtarry.length;i++)
        {
          for(let j=0;j<txtarry[i].length;j++)
          {
            if (j===0) {
            rst+=txtarry[i][0].toUpperCase();
            }
            else
            rst+=txtarry[i][j];
          }
          rst+=" ";
        }
        setText(rst);
        props.showAlert('converted to Title Case...!','success');
      }
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'#1b384d'}}>
    <div className="mt-2" >
        <h3 >{props.head}</h3>
        <textarea className="form-control mx-1"  value={text}  onChange={onchange} style={{backgroundColor: props.mode==='dark'?'#1b384d':'white',color :props.mode==='dark' ? 'white':'#1b384d'}} id="floatingTextarea" rows="6">
            </textarea>
      </div> 
      <br></br>
      <button disabled={text.length===0}type="button" className="btn btn-info mx-3 my-1" onClick={changetoupper}>Click to UpperCase</button>
      <button disabled={text.length===0}type="button" className="btn btn-info mx-3 my-1" onClick={changetolower}>Click to LowerCase</button>
      <button disabled={text.length===0}type="button" className="btn btn-info mx-3 my-1" onClick={changetoInversion}>Click to InversionCase</button>
      <button disabled={text.length===0}type="button" className="btn btn-info mx-3 my-1" onClick={TitleCase}>Click to TitleCase</button>
      <button disabled={text.length===0}type="button" className="btn btn-danger mx-3 my-1npm" onClick={cleartext}>Clear Text</button>
    </div>
    <br></br>
    <div style={{color :props.mode==='dark' ? 'white':'#1b384d'}}>
    <h3 >Text Summary</h3>
    <p >Total {text.split(/\s+/).filter((elements)=>{return elements.length!==0}).length} words and {text.length} Characters</p>
    <p >{0.008 * (text.split(" ").length-1)} min to read the textArea</p>
    <h4>Preview</h4>
    <p>{text.length>0 ? text :<b>Enter something to preview,</b>}</p>
    </div>
    </>
  )
}
