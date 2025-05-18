import { useState } from "react";
import Todoform from "./Container/Todoform/Todoform"
import TodoList from "./Container/TodoList/TodoList"
import ClearAll from "./Container/ClearAll/ClearAll";

function App() {

  const [todos, setTodos] = useState(()=>{
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
  });


   const handleSubmit=(inputvalue)=>{
        if(inputvalue==="")return;
        if(todos.includes(inputvalue)) return;
         setTodos((prevTodos)=>[...prevTodos,inputvalue]) 
        } 
        localStorage.setItem("todos", JSON.stringify(todos));


      const handlemarkTodo=(todo)=>{
       
    }
      const handleDeleteTodo=(todo)=>{
        const newTodos = todos.filter((t) => t !== todo);
        setTodos(newTodos);
    }

    function handleClear(){
        setTodos([]);
        localStorage.removeItem("todos");
    }
  return (
    <div className="App">
     <Todoform onAddTodo={handleSubmit}/>
     <TodoList todos={todos} handleDeleteTodo={handleDeleteTodo} handlemarkTodo={handlemarkTodo}/>
     <ClearAll handleClear={handleClear}/>
      </div>
  )
}

export default App
