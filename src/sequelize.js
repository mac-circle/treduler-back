import Sequelize from "sequelize";
import dotenv from "dotenv";
import {
  DataBaseConnectionSuccess,
  DataBaseConnectionFailed
} from "./middlewares/middlewares";
dotenv.config();

const env = process.env.NODE_ENV || "dev";

let DBNAME = process.env.DB_DEV_DBNAME;
let USERNAME = process.env.DB_DEV_USERNAME;
let PASSWORD = process.env.DB_DEV_PASSWORD;
let HOST = process.env.DB_ENV_HOST;

if (env === "dev") {
} else {
  DBNAME = process.env.DB_PRD_DBNAME;
  USERNAME = process.env.DB_PRD_USERNAME;
  PASSWORD = process.env.DB_PRD_PASSWORD;
  HOST = process.env.DB_PRD_HOST;
}

export const sequelize = new Sequelize(DBNAME, USERNAME, PASSWORD, {
  host: HOST,
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

sequelize
  .authenticate()
  .then(() => DataBaseConnectionSuccess(HOST))
  .catch(DataBaseConnectionFailed);
