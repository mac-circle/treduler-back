"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var testFN = exports.testFN = function testFN(req, res, next) {
  var result = {
    data: "test"
  };
  res.json(result);
};

var PostTest = exports.PostTest = function PostTest(req, res, next) {
  res.json(req.body);
};