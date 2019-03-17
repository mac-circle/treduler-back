"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var handleListening = exports.handleListening = function handleListening(PORT) {
  console.log("\u2705 Treduler Server listening on port " + PORT);
};

var HelloWorld = exports.HelloWorld = function HelloWorld(req, res) {
  res.send("Hi, This is treduler server. We are composed of Shin dong gyu, Lee jung hyun, Park sung joon");
};