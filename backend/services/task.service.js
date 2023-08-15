import db from "../../database/config/db.js";

export const getTask = () => {
  return new Promise((resolve, reject) => {
    const query = "select * from task natural join taskcompleted";
    db.execute(query)
      .then((result) => {
        resolve(result);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const createTask = (newTask) => {
  return new Promise((resolve, reject) => {
    const query = "insert into task (idTask, nameTask, date) values (?, ?, ?)";
    const { idTask, nameTask, date } = newTask;
    db.execute(query, [idTask, nameTask, date])
      .then((result) => {
        resolve(result);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const updateTask = (id, newTask) => {
  return new Promise((resolve, reject) => {
    const query = "update task set nameTask = ? , date = ? where idTask = ? ";
    const { nameTask, date } = newTask;
    db.execute(query, [nameTask, date, id])
      .then((result) => {
        resolve(result);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const deleteTask = (id) => {
  return new Promise((resolve, reject) => {
    const query = "delete from task where idTask = ?";
    db.execute(query, [id])
      .then((result) => {
        resolve(result);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
