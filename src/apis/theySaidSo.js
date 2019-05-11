import express from "express";
import ROUTES from "../routes/routes";
import { getInspireQuotes } from "../controllers/theySaidSo/they_said_so";

const router = express.Router();

router.get(ROUTES.tssInspire, getInspireQuotes);

export default router;
