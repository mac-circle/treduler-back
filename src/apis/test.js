import express from "express";
import { testFN, PostTest } from "../controllers/test";
import ROUTES from "../routes/routes";
import { middlewareForParsingMultipartFormData } from "../middlewares/middlewares";

const router = express.Router();

router.get(ROUTES.basicSlash, testFN);
router.post(ROUTES.basicSlash, middlewareForParsingMultipartFormData, PostTest);

export default router;
