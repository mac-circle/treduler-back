import User from "../../models/user";

export const newAccount = (req, res, next) => {
  const { email, password } = req.body;

  try {
    User.findOrCreate({
      where: { email },
      defaults: {
        nickname: email,
        password: "hashed password will be here!"
      }
    }).then(([user, created]) => {
      if (created) {
        res.json({
          ok: true,
          error: null,
          token: "sample token",
          status: 200
        });
      } else {
        res.json({
          ok: false,
          error: "Already existing email account",
          token: null,
          status: 409
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
