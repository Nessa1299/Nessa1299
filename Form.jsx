import React,{useState} from "react";

const Form =(props)=> {
    const [note, setNote] =useState({title: "" ,content:""})

    const handleChange =(e)=>{
    const name =e.target.name;
    const value =e.target.value;
    setNote({...note,[name]:value})
    }
    const handleSubmit =(e)=>{
     e.preventDefault()
    // console.log(note);
     props.onCreate(note)
     setNote({title : "",content: ""})
    }

  return(
    <form method='post' onSubmit={handleSubmit}>
       <input type="text" name="title" placeholder="enter title..."onChange={handleChange} value={note.title}/>
       <textarea name="content" placeholder="type content here..."  onChange={handleChange}value={note.content} rows="4"></textarea>
       <button type="Submit">Submit</button>
    </form>
  )
}

export default Form;