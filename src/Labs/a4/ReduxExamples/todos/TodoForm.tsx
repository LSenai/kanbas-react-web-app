import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";
import { LabState } from "../../../store";


function TodoForm() {
  const { todo } = useSelector((state: LabState) => state.todosReducer);
  const dispatch = useDispatch();
  return (
      <li className="list-group-item">
        {/* Clear descriptions of button actions */}
        <button onClick={() => dispatch(addTodo(todo))}>
          Add new todo
        </button>
        <button onClick={() => dispatch(updateTodo(todo))}>
          Update existing todo 
        </button>
  
        {/* Input field for modifying the todo's title */}
        <input
          value={todo.title}
          onChange={(e) => dispatch(setTodo({ ...todo, title: e.target.value }))}
        />
      </li>
    );
  }
  export default TodoForm;
  