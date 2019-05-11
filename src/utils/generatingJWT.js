import jwt from "jsonwebtoken";
import secretKey from "../constants/secret";

export const generatingJWT = id => {
  const token = jwt.sign({ id }, secretKey);
  return token;
};

export const verifyingJWT = token => {
  let id = null;
  try {
    const decoded = jwt.verify(token, secretKey);
    id = decoded.id;
  } catch (error) {
    console.log(error);
  }
  return id;
};
