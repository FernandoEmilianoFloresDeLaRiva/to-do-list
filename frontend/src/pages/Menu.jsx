import "./Menu.css";
import React, { useEffect, useState } from "react";
import { getTask } from "../services/taskService";
import Header from "../components/Header/Header";
import Notifications from "../components/Notifications/Notifications";
import ButtonNewTask from "../components/ButtonNewTask/ButtonNewTask";
import Task from "../components/Task/Task";
import ModalNewTask from "../components/ModalNewTask/ModalNewTask";
import Status from "../components/Status/Status";

function Menu() {
  const [modal, setModal] = useState(false);
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    getTask().then((res) => setTasks(res.data));
  }, [modal]);
  return (
    <div className="menu">
      {modal && <ModalNewTask close={() => setModal(!modal)} />}
      <Header />
      <nav>
        <Notifications tasks={tasks} />
        <Status />
        <ButtonNewTask status={() => setModal(true)} />
      </nav>
      <div className="taskP">
        {tasks.map((task) => {
          return <Task task={task} key={task.idTask} />;
        })}
      </div>
    </div>
  );
}

export default Menu;
