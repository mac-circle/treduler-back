import Sequelize from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const env = process.env.NODE_ENV || "dev";

let DBNAME = process.env.DB_DEV_DBNAME;
let USERNAME = process.env.DB_DEV_USERNAME;
let PASSWORD = process.env.DB_DEV_PASSWORD;
let HOST = process.env.DB_ENV_HOST;

console.log(env);

if (env === "dev") {
} else {
  console.log("1");
  DBNAME = process.env.DB_PRD_DBNAME;
  USERNAME = process.env.DB_PRD_USERNAME;
  PASSWORD = process.env.DB_PRD_PASSWORD;
  HOST = process.env.DB_PRD_HOST;
}

const sequelize = new Sequelize(DBNAME, USERNAME, PASSWORD, {
  host: HOST,
  dialect: "postgres"
});

console.log("2");

sequelize
  .authenticate()
  .then(() => {
    console.log("✅ Database connection has been established successfully.");
  })
  .catch(err => {
    console.error(`❌ Unablie to connect to the database: ${err}`);
  });
