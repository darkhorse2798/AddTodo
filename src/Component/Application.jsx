import React, { useState } from "react";
import AppName from "./AppName";
import AddTodo from "./AddTodo";
// import TodoItem from "./TodoItem";
import "../Styles/App.css";
import ItemsContainer from "./ItemsContainer";
import WelcomeMessage from "./WelcomeMessage";
function Application() {
  const initialTodoItems = [
    // { name: "milk", duedate: "26-02-2024" },
    // { name: "Go to College", duedate: "26-02-2024" },
    // { name: "TestYantra", duedate: "26-02-2024" },
    // { name: "TechnoIndia", duedate: "27-12-2021" },
  ];
  const [todoItems, setTodoItems] = useState(initialTodoItems);
  const handleNewItem = (itemName, dueDate) => {
    // console.log(`new Item Added : ${itemName} Date:${dueDate}`);
    const newTodoItem = [...todoItems, { name: itemName, duedate: dueDate }];
    setTodoItems(newTodoItem);
  };

  const handleDeleteItem =(itemName)=>{
     const deleteItem=todoItems.filter((item)=>item.name!==itemName);
     setTodoItems(deleteItem);
    // console.log(`The Deleted item is:${itemName} `);
       
  }
  return (
    <center className="todo-content">
      <AppName />
      <div className="container ">
        <AddTodo onNewItem={handleNewItem} />
        {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
        <ItemsContainer todoItems={todoItems}
        onDeleteClick={handleDeleteItem} 
        ></ItemsContainer>
      </div>
    </center>
  );
}

export default Application;
