import express from "express";
import { testFN } from "../controllers/test";
const router = express.Router();

router.get("/", testFN);

export default router;
