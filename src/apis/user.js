import express from "express";
import ROUTES from "../routes/routes";
import { middlewareForParsingMultipartFormData } from "../middlewares/middlewares";
import { newAccount } from "../controllers/user/new_account";

const router = express.Router();

router.post(
  ROUTES.newAccount,
  middlewareForParsingMultipartFormData,
  newAccount
);

export default router;
