import User from "../../models/user";
import { verifyingJWT } from "../../utils/generatingJWT";
import { mailOptions, transporter } from "../../nodemailer";
import { title, text, html } from "../../constants/nodemailerContents";

const requestVerify = async (req, res, next) => {
  const token = req.headers.token;
  const id = verifyingJWT(token);
  try {
    const user = await User.findByPk(id);
    const mailOption = mailOptions(user.email, title, text, html);
    transporter.sendMail(mailOption, (error, info) => {
      if (error) {
        console.log(error);
        res.json({
          ok: false,
          error: "Sorry, fail to send a email",
          status: 409
        });
      } else {
        res.json({
          ok: true,
          error: null,
          status: 200
        });
      }
    });
  } catch (err) {
    console.log(err);
    res.json({
      ok: false,
      error: "You have to login",
      status: 401
    });
  }
};
export default requestVerify;
