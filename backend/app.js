import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import db from "../database/config/db.js";
import indexRouter from "./routes/index.route.js";

dotenv.config();
const app = express();

app.set("port", process.env.PORT || 4000);

//middleware
app.use(express.json());
app.use(cors());

//rutes
app.use("/", indexRouter);

app.use("*", (req, res) => {
  res.status(404).send("This path does not exist in the API");
});

//Server starting
app.listen(app.get("port"), () => {
  console.log("Server running on port", app.get("port"));
});

//db
db.connect()
  .then(() => {
    console.log("Database connected sucesfully!");
  })
  .catch((err) => {
    console.log("Error: ", err);
  });
