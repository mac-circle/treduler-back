import express from "express";
import testRouter from "./test";
import ROUTES from "../routes/routes";
import userRouter from "./user";
import verifyRouter from "./verify";
import unsplashRouter from "./unsplash";
import theySaidSoRouter from "./theySaidSo";

const router = express.Router();

router.use(ROUTES.testRoute, testRouter);
router.use(ROUTES.userRoute, userRouter);
router.use(ROUTES.verifyRoute, verifyRouter);
router.use(ROUTES.unsplashRoute, unsplashRouter);
router.use(ROUTES.theySaidSoRoute, theySaidSoRouter);
export default router;
