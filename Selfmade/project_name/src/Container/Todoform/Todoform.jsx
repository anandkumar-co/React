import { useState } from "react";
import "./todoform.css";


function Todoform({onAddTodo}) {

    const[inputvalue, setInputValue] = useState({});

    const handleChange=(value)=>{
        setInputValue({id:value,content:value,isCompleted:false});
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        onAddTodo(inputvalue);
        setInputValue({id:"",content:"",isCompleted:false});  
    } 
  

  return (
    <div className="todo-container">
        <h1>Todo List</h1>
        <form onSubmit={(e)=>{handleSubmit(e)}}>
          <input type="text" placeholder="Add a new task" value={inputvalue.content} onChange={(event)=>{handleChange(event.target.value)}           
          }/>
          <button type="submit">Add</button>
        </form>
      </div>
  );
}
export default Todoform;