import express from "express";
import ROUTES from "../routes/routes";
import { middlewareForParsingMultipartFormData } from "../middlewares/middlewares";
import { newAccount } from "../controllers/user/new_account";
import userSignIn from "../controllers/user/sign_in";

const router = express.Router();

router.post(
  ROUTES.newAccount,
  middlewareForParsingMultipartFormData,
  newAccount
);

router.post(
  ROUTES.userSignIn,
  middlewareForParsingMultipartFormData,
  userSignIn
);

export default router;
