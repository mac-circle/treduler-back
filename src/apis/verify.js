import express from "express";
import ROUTES from "../routes/routes";
import requestVerify from "../controllers/verify/request_verify";

const router = express.Router();

router.get(ROUTES.requestVerify, requestVerify);

export default router;
