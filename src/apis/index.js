import express from "express";
import testRouter from "./test";
import ROUTES from "../routes/routes";
import userRouter from "./user";

const router = express.Router();

router.use(ROUTES.testRoute, testRouter);
router.use(ROUTES.userRoute, userRouter);
export default router;
