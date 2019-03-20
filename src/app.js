import express from "express";
import { HelloWorld } from "./middlewares/middlewares";
import API from "./apis";

const app = express();

app.get("/", HelloWorld);
app.use("/api", API);

export default app;
