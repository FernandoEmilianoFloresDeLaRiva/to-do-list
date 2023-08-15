import db from "../../database/config/db.js";

export const updateTaskState = (id, state) => {
  return new Promise((resolve, reject) => {
    const query = "update taskcompleted set completed = ? where idTask = ? ";
    db.execute(query, [state, id])
      .then((result) => {
        resolve(result);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const createTaskState = (id) => {
  return new Promise((resolve, reject) => {
    const query =
      "insert into taskcompleted (idTask, completed) values (?, 'no')";
    db.execute(query, [id])
      .then((result) => {
        resolve(result);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const deleteTaskState = (id) => {
  return new Promise((resolve, reject) => {
    const query = "delete from taskcompleted where idTask = ?";
    db.execute(query, [id])
      .then((result) => {
        resolve(result);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
