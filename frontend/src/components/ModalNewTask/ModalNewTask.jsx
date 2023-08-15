import "./ModalNewTask.css";
import { createTask } from "../../services/taskService";
import closeSvg from "../../assets/close.svg";
import React, { useState } from "react";

function ModalNewTask({ close }) {
  const [name, setName] = useState("");
  const [dateTask, setDateTask] = useState();
  const changeName = (e) => {
    setName(e.target.value);
  };
  const changeDataTask = (e) => {
    setDateTask(e.target.value);
  };
  const validation = (e) => {
    if (name !== "") {
      e.preventDefault();
      createTask({ nameTask: name, date: new Date(dateTask) })
        .then((res) => console.log(res))
        .then(close())
        .finally(window.location.reload());
    }
  };
  return (
    <div className="container-modal">
      <section>
        <button className="close" onClick={close}>
          <img src={closeSvg} />
        </button>
        <form>
          <label htmlFor="taskName">TASK NAME:</label>
          <br />
          <input type="text" id="taskName" onChange={changeName} required />
          <br />
          <label htmlFor="taskDate">DATE TO DO THE TASK:</label>
          <br />
          <input type="date" id="taskDate" onChange={changeDataTask} />
          <br />
          <button className="add" onClick={validation}>
            CREATE TASK
          </button>
        </form>
      </section>
    </div>
  );
}

export default ModalNewTask;
