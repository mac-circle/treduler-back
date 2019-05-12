import User from "../../models/user";
import { checkPassword } from "../../utils/hasingPassword";
import { generatingJWT } from "../../utils/generatingJWT";

const userSignIn = async (req, res, next) => {
  const { email, password } = req.body;
  let userToLogin = null;
  try {
    userToLogin = await User.findOne({ where: { email } });
  } catch (err) {
    console.log(err);
    res.json({
      ok: false,
      token: null,
      error: "Can't find account with your email",
      status: 401
    });
  }
  let match = false;
  try {
    match = await checkPassword(password, userToLogin.password);
  } catch (err) {
    res.json({
      ok: false,
      token: null,
      error: "Server running off...",
      status: 500
    });
  }
  if (!match) {
    res.json({
      ok: false,
      token: null,
      error: "Wrong password",
      status: 401
    });
  } else {
    const token = generatingJWT(userToLogin.id);
    res.json({
      ok: true,
      token,
      error: null,
      status: 200
    });
  }
};
export default userSignIn;
