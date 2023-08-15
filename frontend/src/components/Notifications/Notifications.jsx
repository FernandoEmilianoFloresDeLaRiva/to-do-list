import "./Notifications.css";
import bell from "../../assets/bell.svg";
import React, { useEffect, useState } from "react";

function Notifications({ tasks }) {
  const [seeTasks, setSeeTasks] = useState(false);
  const [taskAlert, setTaskAlert] = useState([]);
  useEffect(() => {
    const tasksPending = tasks.filter(
      (task) => new Date(task.date) < new Date() && task.date !== null
    );
    setTaskAlert(tasksPending);
  }, [tasks]);
  return (
    <div>
      <button className="bell-button" onClick={() => setSeeTasks(!seeTasks)}>
        <img
          src={bell}
          className={taskAlert.length <= 0 ? "bell-img" : "img-bell-animation"}
        />
      </button>
      {seeTasks && (
        <div className="container-content">
          {taskAlert.length > 0 &&
            taskAlert.map((task) => {
              const dateTask = new Date(task.date);
              return (
                <div className="content" key={task.idTask}>
                  {task.nameTask}
                  <br />
                  {dateTask.toDateString()}
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
}

export default Notifications;
