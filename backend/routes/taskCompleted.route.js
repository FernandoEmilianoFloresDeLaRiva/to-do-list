import { Router } from "express";
import {
  updateTaskState,
  createTaskState,
  deleteTaskState,
} from "../controllers/taskCompleted.controller.js";

const taskCompleted = Router();

taskCompleted.patch("/:id", updateTaskState);

taskCompleted.post("/", createTaskState);

taskCompleted.delete("/delete/:id", deleteTaskState);

export default taskCompleted;
