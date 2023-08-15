import { Router } from "express";
import {
  getTask,
  createTask,
  updateTask,
  deleteTask,
} from "../controllers/task.controller.js";

const taskRouter = Router();

taskRouter.get("/", getTask);

taskRouter.patch("/update/:id", updateTask);

taskRouter.delete("/delete/:id", deleteTask);

taskRouter.post("/", createTask);

export default taskRouter;
