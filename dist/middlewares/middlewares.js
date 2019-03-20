"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.middlewareForParsingSinglePartFormData = exports.middlewareForParsingMultipartFormData = exports.DataBaseConnectionFailed = exports.DataBaseConnectionSuccess = exports.HelloWorld = exports.handleListening = undefined;

var _multer = require("multer");

var _multer2 = _interopRequireDefault(_multer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var upload = (0, _multer2.default)();

var handleListening = exports.handleListening = function handleListening(PORT) {
  console.log("\u2705 Treduler Server listening on port " + PORT);
};

var HelloWorld = exports.HelloWorld = function HelloWorld(req, res) {
  res.send("Hi, This is treduler server. We are composed of Shin dong gyu, Lee jung hyun, Park sung joon");
};

var DataBaseConnectionSuccess = exports.DataBaseConnectionSuccess = function DataBaseConnectionSuccess() {
  console.log("✅ Database connection has been established successfully.");
};

var DataBaseConnectionFailed = exports.DataBaseConnectionFailed = function DataBaseConnectionFailed(err) {
  console.error("\u274C Unablie to connect to the database: " + err);
};

var middlewareForParsingMultipartFormData = exports.middlewareForParsingMultipartFormData = upload.array();
var middlewareForParsingSinglePartFormData = exports.middlewareForParsingSinglePartFormData = upload.single();