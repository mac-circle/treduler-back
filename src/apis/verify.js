import express from "express";
import ROUTES from "../routes/routes";
import requestVerify from "../controllers/verify/request_verify";
import verifyUser from "../controllers/verify/verify_user";

const router = express.Router();

router.get(ROUTES.requestVerify, requestVerify);
router.post(ROUTES.verifyUser, verifyUser);

export default router;
