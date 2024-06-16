import { useState, useRef } from "react";
import css from "./AppTodo.module.css";
function AddTodo({ onNewItem }) {
  const todoNameElement = useRef();
  const dueDateElement = useRef();


  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoNameElement.current.value="";
    dueDateElement.current.value="";
    onNewItem(todoName, dueDate);
  };
  return (
    <div className="container text-center">
      <form className={`${css["row1"]} row`} onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="Please Enter Your ToDo Here"
            className={`${css["wid"]}`}
          ></input>
        </div>
        <div className="col-4">
          <input
            type="date"
            ref = {dueDateElement}
            className={css.wid}
          />
        </div>
        <div className="col-2">
          <button className={`${css["butn"]} btn btn-info`}>Add</button>
        </div>
      </form>
    </div>
  );
}
export default AddTodo;
