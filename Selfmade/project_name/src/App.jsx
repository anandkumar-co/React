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
    const {id,content,isCompleted} = inputvalue;
        if(!content )return;
        const todosExist=todos.find((currTask)=>currTask.content===content); 
        if(todosExist)return;
         setTodos((prevTodos)=>[...prevTodos,{id,content,isCompleted}]) 
        } 
        localStorage.setItem("todos", JSON.stringify(todos));


      const handlemarkTodo=(todo)=>{
        const newTodos = todos.map((t)=>{
          if(t.content===todo){
            return{...t, isCompleted: !t.isCompleted}
          }
          else{
            return t;
          }
        })
        setTodos(newTodos);
    }
      const handleDeleteTodo=(todo)=>{
        const newTodos = todos.filter((t) => t.content !== todo);
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
