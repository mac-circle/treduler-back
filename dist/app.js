"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _middlewares = require("./middlewares/middlewares");

var _morgan = require("morgan");

var _morgan2 = _interopRequireDefault(_morgan);

var _apis = require("./apis");

var _apis2 = _interopRequireDefault(_apis);

var _helmet = require("helmet");

var _helmet2 = _interopRequireDefault(_helmet);

var _cors = require("cors");

var _cors2 = _interopRequireDefault(_cors);

var _routes = require("./routes/routes");

var _routes2 = _interopRequireDefault(_routes);

var _bodyParser = require("body-parser");

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _cookieParser = require("cookie-parser");

var _cookieParser2 = _interopRequireDefault(_cookieParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

// middlewares

app.use((0, _helmet2.default)());
app.use((0, _morgan2.default)("dev"));
app.use(_bodyParser2.default.json()); // for parsing application/json
app.use(_bodyParser2.default.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use((0, _cors2.default)());
app.use((0, _cookieParser2.default)());
app.use(_routes2.default.apiRoute, _apis2.default);

// default showing part
app.get(_routes2.default.basicSlash, _middlewares.HelloWorld);

exports.default = app;