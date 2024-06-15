import React,{useContext} from 'react'
import './TodoList.css'
import { TodoContext } from '../context/TodoContext'
const TodoList = () => {
    const {todos,removeTodoAction}=useContext(TodoContext);
  return (
    <div>
      <div className='todo-list-container'>
        <div className='todo-item-container'>
            {todos.map((todo)=>{
                return(
                    <div key={todo.id} className='todo-item-container'>
                        <h3>{todo.title}</h3>
                        <button id="b1" onClick={()=>removeTodoAction(todo.id)}>Delete</button>
                    </div>
                )
            })}
        </div>
      </div>
    </div>
  )
}

export default TodoList
