import { validatePartialTask, validateTask } from "../schemas/task.js";
import * as taskService from "../services/task.service.js";
import { deleteTaskState } from "../services/taskCompleted.service.js";
import crypto from "node:crypto";

export const getTask = (req, res) => {
  taskService
    .getTask()
    .then((result) => {
      res.status(200).json({
        data: result[0],
      });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

export const createTask = (req, res) => {
  const result = validateTask(req.body);
  if (!result.success) {
    return res.status(422).json({ error: JSON.parse(result.error.message) });
  }
  const newTask = {
    idTask: crypto.randomUUID(),
    ...result.data,
  };
  taskService
    .createTask(newTask)
    .then(() => {
      res.status(201).json({
        data: `Task with name ${newTask.nameTask} created sucessfully!`,
      });
    })
    .finally(() => {
      const requestInit = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newTask),
      };
      fetch("http://localhost:4000/api/taskC", requestInit);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

export const updateTask = (req, res) => {
  const result = validatePartialTask(req.body);
  if (result.error) {
    return res.status(400).json(JSON.parse(result.error.message));
  }
  const { id } = req.params;
  taskService
    .updateTask(id, result.data)
    .then(() => {
      res.status(202).json({
        data: "Task successfully updated!",
      });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

export const deleteTask = (req, res) => {
  const { id } = req.params;
  deleteTaskState(id)
    .then(
      taskService
        .deleteTask(id)
        .then(() => {
          res.status(202).json({
            data: "Task deleted",
          });
        })
        .catch((err) => {
          res.status(500).send(err);
        })
    )
    .catch((err) => {
      res.status(500).send(err);
    });
};
