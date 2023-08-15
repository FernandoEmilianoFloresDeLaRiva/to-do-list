import { Router } from "express";
import taskRouter from "./task.route.js";
import taskCompleted from "./taskCompleted.route.js";

const indexRouter = Router();
const prefix = "/api";

indexRouter.get(prefix, (req, res) => {
  res.status(200).send("Welcome to my API");
});

indexRouter.use(`${prefix}/task`, taskRouter);
indexRouter.use(`${prefix}/taskC`, taskCompleted);

export default indexRouter;
