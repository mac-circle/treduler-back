import express from "express";
import testRouter from "./test";
import ROUTES from "../routes/routes";

const router = express.Router();

router.use(ROUTES.testRoute, testRouter);
export default router;
