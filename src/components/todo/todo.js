import React from "react";
import firebase from "../../utilities/firebase";
import styles from "./todo.css";

function Todo({ todo }) {
  return (
    <div>
      <h1>{todo.title}</h1>
      <button className="del">Delete</button>
      <button className="comp">Complete</button>
    </div>
  );
}

export default Todo;
