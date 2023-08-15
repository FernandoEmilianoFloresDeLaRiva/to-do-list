import React from "react";
import "./ButtonNewTask.css";
import addTask from "../../assets/addTask.svg";

function ButtonNewTask({ status }) {
  return (
    <button className="button-newTask" onClick={status}>
      <img src={addTask} className="img-newTask" />
      Add new Task
    </button>
  );
}

export default ButtonNewTask;
