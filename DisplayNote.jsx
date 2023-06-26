import React from "react";

const DisplayNote =(props)=> {

    const handleClick=(id) =>{
    props.getId(id)

    }
    const handleUpdate= (note) =>{
        props.getUpdateNoteId(note)
    }
    


  return(
    <div className="note" key={props.id} >
    <p className="title">{props.title}</p>
    <p className="content">{props.content}</p>
    <button onClick={()=>handleClick(props.id)}>delete</button>
    <button style ={{"marginLeft"  :"10px" }}onClick={() => handleUpdate({content: props.content,  title: props.title, id: props.id})}>update</button>
</div>
  )
}

export default DisplayNote; 