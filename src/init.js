import app from "./app";
import dotenv from "dotenv";
dotenv.config();

const env = process.env.NODE_ENV || "dev";
let PORT = 8001;

if (env === "dev") {
  PORT = process.env.PORT_DEV;
} else {
  PORT = process.env.PORT_PRD;
}

const listeningHandler = () => {
  console.log(`✅  Treduler server listening on port ${PORT}`);
};

app.listen(PORT, listeningHandler);
