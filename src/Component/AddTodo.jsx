// import React, { useRef } from "react";
import React, { useState } from "react";

import { FaPlusCircle } from "react-icons/fa";
function AddTodo({ onNewItem }) {
  const [itemName, setitemName] = useState('');
  const [dueDate, setDueDate] = useState('');
  // const itemNameElement = useRef("");
  // const dueDateIs = useRef("");

  function handleNameChange(event) {
    setitemName(event.target.value);   //
  }
  function handleDateChange(event) {
    setDueDate(event.target.value);
  }
  const handleAddButtonClicked = (event) => {
    console.log(event);
    event.preventDefault();
    // const itemName=itemNameElement.current.value;
    // const dueDate=dueDateIs.current.value;
    // console.log(`${itemName} and ${dueDate}`);
    // itemNameElement.current.value="";
    // dueDateIs.current.value="";
    

    onNewItem(itemName, dueDate);
    setitemName("");
    setDueDate("");
  };
  return (
    <div>
      <form onSubmit={handleAddButtonClicked} className="row myRow">
        <div className="col-sm-6 mb-4">
          <input
            onChange={handleNameChange}
            value={itemName}
            // ref={itemNameElement}
            type="text"
            placeholder="Enter Todo List"
          />
        </div>
        <div className="col-sm-4">
          <input 
            // ref={dueDateIs}
            value={dueDate}

          onChange={handleDateChange} type="date"  />
        </div>
        <div className="col-sm-2">
          <button className="btn btn-success myBtn">
            <FaPlusCircle style={{ fontSize: "10px" }} />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
