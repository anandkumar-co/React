import "./todoList.css";
import { MdDelete } from "react-icons/md";
import { CiBookmark } from "react-icons/ci";
function TodoList(props) {
   const {todos,handleDeleteTodo,handlemarkTodo} = props;

    const handleDelete=(todo)=>{
        handleDeleteTodo(todo);
    }
    const handlemark=(todo)=>{
        handlemarkTodo(todo);
    }
  return (
    <div className="Todo-List">
      <ul>
        {todos.map((todo,index)=>{
            return (
                <li key={index} id={todo}>
                {todo}
                
                <button onClick={() => handleDelete(todo)}><MdDelete /></button>
                <button onClick={() => handlemark(todo)}> <CiBookmark /></button>
                </li>
            );
        })}
      </ul>
    </div>
  );
}   
export default TodoList;