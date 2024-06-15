import React,{useReducer,createContext, useEffect} from "react";
export const TodoContext=createContext()

//get data form local storage
const getTodos=()=>{
    const todos=localStorage.getItem("todos");
    if(todos){
        return JSON.parse(todos);
    }else{
        return [];
    }
}
const initialtodos=getTodos();
//reducer
const todoReducer=(state,action)=>{
    switch(action.type){
        case 'ADD_TODO':
            return [...state,action.payload];
        case 'REMOVE_TODO':
            return state.filter(todo=>todo.id!==action.payload);

        default:
            return state;

    }
};

export const TodoContextProvider=({children})=>{
    const [todos,dispatch]=useReducer(todoReducer,initialtodos);
    //save to localstorage
    useEffect(()=>{
        localStorage.setItem('todos',JSON.stringify(todos))
    },[todos]);
    //add todo action
    const addTodoAction=title=>{
        dispatch({
            type:"ADD_TODO",
            payload:{
                id:todos.length+1,
                title,

            },
        })
    }
    //remove
    const removeTodoAction=id=>{
        dispatch({
            type:"REMOVE_TODO",
            payload:id,
        })
    }
    return (
        <>
        <TodoContext.Provider value={{todos,addTodoAction,removeTodoAction}}>{children}</TodoContext.Provider>;
        </>
    )
};

export default TodoContext;