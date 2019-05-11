import express from "express";
import ROUTES from "../routes/routes";
import { getRandomImageFromUnsplash } from "../controllers/unsplash/unsplah";

const router = express.Router();

router.get(ROUTES.randomImage, getRandomImageFromUnsplash);

export default router;
