import React from "react";
import TodoItem from "./TodoItem";

const ItemsContainer = ({ todoItems, onDeleteClick }) => {
  return (
    <div>
      {todoItems.map((items, index) => (
        <TodoItem
          key={index}
          todoName={items.name}
          todoDate={items.duedate}
          onDeleteClick={onDeleteClick}
        />
      ))}
    </div>
  );
};
export default ItemsContainer;
