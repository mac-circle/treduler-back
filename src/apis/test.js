import express from "express";
import { testFN } from "../controllers/test";
import ROUTES from "../routes/routes";
const router = express.Router();

router.get(ROUTES.basicSlash, testFN);

export default router;
