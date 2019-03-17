import express from "express";
import { HelloWorld } from "./middlewares/middlewares";

const app = express();

app.get("/", HelloWorld);

export default app;
