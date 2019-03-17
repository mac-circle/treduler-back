"use strict";

var _sequelize = require("sequelize");

var _sequelize2 = _interopRequireDefault(_sequelize);

var _dotenv = require("dotenv");

var _dotenv2 = _interopRequireDefault(_dotenv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv2.default.config();

var env = process.env.NODE_ENV || "dev";

var DBNAME = process.env.DB_DEV_DBNAME;
var USERNAME = process.env.DB_DEV_USERNAME;
var PASSWORD = process.env.DB_DEV_PASSWORD;
var HOST = process.env.DB_ENV_HOST;

console.log(env);

if (env === "dev") {} else {
  console.log("1");
  DBNAME = process.env.DB_PRD_DBNAME;
  USERNAME = process.env.DB_PRD_USERNAME;
  PASSWORD = process.env.DB_PRD_PASSWORD;
  HOST = process.env.DB_PRD_HOST;
}

var sequelize = new _sequelize2.default(DBNAME, USERNAME, PASSWORD, {
  host: HOST,
  dialect: "postgres"
});

console.log("2");

sequelize.authenticate().then(function () {
  console.log("✅ Database connection has been established successfully.");
}).catch(function (err) {
  console.error("\u274C Unablie to connect to the database: " + err);
});