import React from "react";
import styles from "../Styles/TodoItem.module.css";
import { CiCircleMinus } from "react-icons/ci";


function TodoItem({ todoName, todoDate,onDeleteClick }) {
  return (
    <div>
      <div className={`row ${styles.yourCssModuleClass}`}>
        <div style={{fontWeight:"400",fontSize:"20px"}} className="col-sm-6 mb-4 ">{todoName} </div>
        <div style={{fontWeight:"400",fontSize:"20px"}}  className="col-sm-4">{todoDate}</div>
        <div className="col-sm-2">
          <button type="button" className="btn btn-warning myBtn"
          onClick={()=>onDeleteClick(todoName)}
          ><CiCircleMinus />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
