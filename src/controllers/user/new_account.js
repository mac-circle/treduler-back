import User from "../../models/user";
import { hashingPassword } from "../../utils/hasingPassword";
import { generatingJWT } from "../../utils/generatingJWT";

export const newAccount = async (req, res, next) => {
  const { email, password } = req.body;
  let hashedPassword = null;
  try {
    hashedPassword = await hashingPassword(password);
  } catch (error) {
    console.log(error);
    res.json({
      ok: false,
      error: "Error in server",
      token: null,
      status: 500
    });
  }

  try {
    User.findOrCreate({
      where: { email },
      defaults: {
        nickname: email,
        password: hashedPassword
      }
    }).then(([user, created]) => {
      if (created) {
        const token = generatingJWT(user.id);
        res.json({
          ok: true,
          error: null,
          token,
          status: 200
        });
      } else {
        res.json({
          ok: false,
          error: "Already existing email account",
          token: null,
          status: 403
        });
      }
    });
  } catch (error) {
    console.log(error);
    res.json({
      ok: false,
      error: "Server is running off...",
      token: null,
      status: 500
    });
  }
};
