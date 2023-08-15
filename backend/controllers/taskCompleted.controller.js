import * as taskCompleted from "../services/taskCompleted.service.js";

export const updateTaskState = (req, res) => {
  const { id } = req.params;
  const { completed } = req.body;
  taskCompleted
    .updateTaskState(id, completed)
    .then(() => {
      res.status(202).json({
        data: "Task state successfully updated!",
      });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

export const createTaskState = (req, res) => {
  const { idTask } = req.body;
  taskCompleted
    .createTaskState(idTask)
    .then(() => {
      res.status(201).json({
        data: `Task with id: ${idTask} created sucessfully!`,
      });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

export const deleteTaskState = (req, res) => {
  const { id } = req.params;
  taskCompleted
    .deleteTaskState(id)
    .then(() => {
      res.status(202).json({
        data: "Task deleted",
      });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};
