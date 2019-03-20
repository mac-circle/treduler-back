"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _test = require("../controllers/test");

var _routes = require("../routes/routes");

var _routes2 = _interopRequireDefault(_routes);

var _middlewares = require("../middlewares/middlewares");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get(_routes2.default.basicSlash, _test.testFN);
router.post(_routes2.default.basicSlash, _middlewares.middlewareForParsingMultipartFormData, _test.PostTest);

exports.default = router;