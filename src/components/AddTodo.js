import React,{useContext, useState} from 'react'
import "./AddTodo.css";
import { TodoContext } from '../context/TodoContext';
const AddTodo = () => {
    const{ addTodoAction ,state}=useContext(TodoContext);
    console.log(state);
    const [title,setTitle]=useState('');

    const handleTitleChange =(e)=>(
        setTitle(e.target.value)
    )
    //submit
    const handleSubmit=e=>{
        e.preventDefault();
        if(title===""){
            return alert("Please provide activity")
        }
        addTodoAction(title);
    };
  return (
    <>
    <form onSubmit={handleSubmit}>
        <input value={title} onChange={handleTitleChange}></input>
        <button type="submit">Add Todo</button>
    </form>
    </>
  )
}

export default AddTodo
