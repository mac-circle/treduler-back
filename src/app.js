import express from "express";
import { HelloWorld } from "./middlewares/middlewares";
import morgan from "morgan";
import API from "./apis";

const app = express();

// middlewares

app.use(morgan("dev"));
app.use("/api", API);

// default showing part
app.get("/", HelloWorld);

export default app;
