import { useState } from "react";
import "./todoform.css";


function Todoform({onAddTodo}) {

    const[inputvalue, setInputValue] = useState("");

    const handleChange=(event)=>{
        setInputValue(event.target.value);
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        onAddTodo(inputvalue);
        setInputValue("");  
    } 
  

  return (
    <div className="todo-container">
        <h1>Todo List</h1>
        <form onSubmit={(e)=>{handleSubmit(e)}}>
          <input type="text" placeholder="Add a new task" value={inputvalue} onChange={(event)=>{handleChange(event)}           
          }/>
          <button type="submit">Add</button>
        </form>
      </div>
  );
}
export default Todoform;