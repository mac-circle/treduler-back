import express from "express";

const app = express();
console.log(__dirname);
app.use("/", express.static(__dirname + "/static/index.htm"));

export default app;
