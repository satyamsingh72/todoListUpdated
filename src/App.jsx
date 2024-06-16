import AddTodo from "./component/AddTodo";
import AppName from "./component/AppName";
import "./App.css";

import TodoItems from "./component/TodoItems";
import { useState } from "react";
import WelcomeMessage from "./component/WelcomeMessage";

function App() {
  const [todoItems, setTodoItems] = useState([]);
  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`New Item Added: ${itemName} Date:${itemDueDate}`);
    const newTodoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setTodoItems(newTodoItems);
  };
  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
        {todoItems.length == 0 && <WelcomeMessage />}
        <TodoItems
        todoItems={todoItems}
        onDeleteClick={handleDeleteItem}
      ></TodoItems>
    </center>
  );
}

export default App;
