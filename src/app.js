import express from "express";
import { HelloWorld } from "./middlewares/middlewares";
import morgan from "morgan";
import API from "./apis";
import helmet from "helmet";
import cors from "cors";

const app = express();

// middlewares

app.use(helmet());
app.use(morgan("dev"));
app.use(cors());
app.use("/api", API);

// default showing part
app.get("/", HelloWorld);

export default app;
