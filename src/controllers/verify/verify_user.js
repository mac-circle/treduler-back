import User from "../../models/user";
import { verifyingJWT } from "../../utils/generatingJWT";

const verifyUser = async (req, res, next) => {
  const token = req.query.tkn;
  const userEmail = verifyingJWT(token);
  try {
    const user = await User.findOne({ where: { email: userEmail } });
    await user.update({
      authorized: true
    });
    res.json({
      ok: true,
      error: null,
      status: 200
    });
  } catch (err) {
    console.log(err);
    res.json({
      ok: false,
      error: "Unauthorized token",
      status: 401
    });
  }
};

export default verifyUser;
