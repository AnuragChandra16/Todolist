//import './App.css';
import About from "./components/About";
import AddTodo from "./components/AddTodo";
import HTTPAxios from "./components/HTTPAxios";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import TodoList from "./components/TodoList";
import { TodoContextProvider } from "./context/TodoContext";
// const col="Color of the car is yellow";
// function football(props){
//     const shoot =()=>{
//         <h1>Great shoot</h1>;
//     }
// }
function App(props){
    return(
        
//         
//         <h1>color is {props.shoot}</h1>
   
// { <Navbar></Navbar>
// <div className="container my-5">
// <TextForm heading="Enter the text to analyze"></TextForm>
// <About></About>
// </div> }
<>
{ <HTTPAxios></HTTPAxios> }
{<TodoContextProvider><AddTodo></AddTodo>
<TodoList></TodoList>
</TodoContextProvider> }
    
    
    </>

);
}
export default App;