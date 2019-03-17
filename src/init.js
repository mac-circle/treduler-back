import app from "./app";
import dotenv from "dotenv";
import { handleListening } from "./middlewares/middlewares";
dotenv.config();
const env = process.env.NODE_ENV || "dev";
let PORT = 8081;

if (env === "production") {
  PORT = process.env.PRD_PORT;
} else {
  PORT = process.env.DEV_PORT;
}

app.listen(PORT, handleListening(PORT));
