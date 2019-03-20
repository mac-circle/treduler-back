import express from "express";
import { HelloWorld } from "./middlewares/middlewares";
import morgan from "morgan";
import API from "./apis";
import helmet from "helmet";
import cors from "cors";
import ROUTES from "./routes/routes";

const app = express();

// middlewares

app.use(helmet());
app.use(morgan("dev"));
app.use(cors());
app.use(ROUTES.apiRoute, API);

// default showing part
app.get(ROUTES.basicSlash, HelloWorld);

export default app;
