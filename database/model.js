import { DataTypes, Model } from "sequelize";
import util from "util";
import connectToDB from "./db.js";

export const db = await connectToDB("postgresql:///tietrader");

export class User extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }
}
User.init(
  {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    username: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },

    password: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
  },
  {
    modelName: "user",
    sequelize: db,
  }
);

export class Tie extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }
}

Tie.init(
  {
    tieId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    imgUrl: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    modelName: "tie",
    sequelize: db,
  }
);

User.hasMany(Tie, { foreignKey: "userId" });
Tie.belongsTo(User, { foreignKey: "userId" });
// Server.hasMany(User, { foreignKey: 'serverId'})
// User.belongsTo(Server, {foreignKey: 'serverId'})
// Transfer.belongsTo(Server, {foreignKey: 'username'})

// await db.sync({ force: true })

// await db.close()
