import "./Task.css";
import completeTask from "../../assets/completeTask.svg";
import deleteIcon from "../../assets/deleteIcon.svg";
import { updateTaskState, deleteTask } from "../../services/taskService";
import React, { useEffect, useState } from "react";

function Task({ task }) {
  const [dateA, setDateA] = useState(null);
  useEffect(() => {
    if (task.date !== null) {
      setDateA(new Date(task.date));
    }
  }, []);
  const updateNewTaskState = () => {
    if (task.completed === "no") {
      updateTaskState({ completed: "yes" }, task.idTask).then((res) =>
        console.log(res.data)
      );
    } else {
      updateTaskState({ completed: "no" }, task.idTask).then((res) =>
        console.log(res.data)
      );
    }
    window.location.reload();
  };
  const deleteNewTask = () => {
    deleteTask(task.idTask)
      .then((res) => console.log(res.data))
      .finally(window.location.reload());
  };
  return (
    <div
      className={
        task.completed !== "no" ? "container-taskC" : "container-taskP"
      }
    >
      <p className="title">{task.nameTask}</p>
      {dateA !== null && <p>{dateA.toDateString()}</p>}
      <div className="container-buttons">
        <button onClick={deleteNewTask}>
          <img src={deleteIcon} />
        </button>
        <button onClick={updateNewTaskState}>
          <img src={completeTask} />
        </button>
      </div>
    </div>
  );
}

export default Task;
