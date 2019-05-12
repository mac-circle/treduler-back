import Sequelize from "sequelize";
import { sequelize } from "../sequelize";

const User = sequelize.define("user", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    comment: "This is identifier"
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    comment: "User login with their email address"
  },
  password: { type: Sequelize.STRING, allowNull: false },
  admin: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    comment: "This will be true only for developer"
  },
  authorized: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    comment: "This will be true after user verified their secret code"
  },
  nickname: { type: Sequelize.STRING },
  profileImage: {
    type: Sequelize.STRING,
    defaultValue: "",
    comment: "User profile image url"
  }
});

export default User;
