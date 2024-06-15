import React,{useEffect} from 'react'
import axios from 'axios'
import './TodoList.css'

const HTTPAxios=()=>{
    //async await
    const apiURL='https://jsonplaceholder.typicode.com/todos/1'
    useEffect(()=>{
        const fetchdata=async () => {
            try{
                const response =await axios.get(apiURL);
                console.log(response.data);
            }
            catch(error){
                console.log(error);
            }
        };
        fetchdata();
    }, []);
    
    return (
        <div>
            <h1>Todo List</h1>
        </div>
    );
    
};
export default HTTPAxios;
