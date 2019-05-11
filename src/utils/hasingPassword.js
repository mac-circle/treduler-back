import bcrypt from "bcrypt";
import SALT_ROUNDS from "../constants/saltRounds";

export const hashingPassword = async plainTextPassword => {
  let hashedPassword = null;
  try {
    hashedPassword = await bcrypt.hashSync(plainTextPassword, SALT_ROUNDS);
  } catch (error) {
    console.log(error);
    hashedPassword = null;
  }
  return hashedPassword;
};

export const checkPassword = async (
  plainTextPassword,
  hashedPasswordFromDB
) => {
  const match = await bcrypt.compare(plainTextPassword, hashedPasswordFromDB);
  return match;
};
