import "./user";
import { sequelize } from "../sequelize";

sequelize.sync({ force: false });
