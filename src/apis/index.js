import express from "express";
import testRouter from "./test";
import ROUTES from "../routes/routes";
import userRouter from "./user";
import verifyRouter from "./verify";

const router = express.Router();

router.use(ROUTES.testRoute, testRouter);
router.use(ROUTES.userRoute, userRouter);
router.use(ROUTES.verifyRoute, verifyRouter);
export default router;
