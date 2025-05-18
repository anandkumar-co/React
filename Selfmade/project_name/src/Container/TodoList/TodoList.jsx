import "./todoList.css";
import { MdDelete } from "react-icons/md";
import { FaBookmark } from "react-icons/fa";
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
                <li key={index} id={todo.content}>
                <span >
                     {todo.content}
                    </span>
                <div className="actionButton">
                <button onClick={() => handleDelete(todo.content)}><MdDelete /></button>
                <button onClick={() => handlemark(todo.content)}> <FaBookmark className={todo.isCompleted?'ciRedBookmark':'ciWhiteBookmark'}/></button>
                </div>
                </li>
            );
        })}
      </ul>
    </div>
  );
}   
export default TodoList;