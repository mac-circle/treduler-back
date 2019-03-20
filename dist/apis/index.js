"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _test = require("./test");

var _test2 = _interopRequireDefault(_test);

var _routes = require("../routes/routes");

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.use(_routes2.default.testRoute, _test2.default);
exports.default = router;