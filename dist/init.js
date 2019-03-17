"use strict";

var _app = require("./app");

var _app2 = _interopRequireDefault(_app);

var _dotenv = require("dotenv");

var _dotenv2 = _interopRequireDefault(_dotenv);

var _middlewares = require("./middlewares/middlewares");

require("./sequelize");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv2.default.config();
var env = process.env.NODE_ENV || "dev";
var PORT = 8081;

if (env === "production") {
  PORT = process.env.PRD_PORT;
} else {
  PORT = process.env.DEV_PORT;
}

_app2.default.listen(PORT, (0, _middlewares.handleListening)(PORT));