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

    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },

    username: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },

    tier: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },

    color: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    length: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    imgUrl: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    modelName: "user",
    sequelize: db,
  }
);

export class Transfer extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }
}

Transfer.init(
  {
    transferId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },

    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },

    username: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },

    tier: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },

    color: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    length: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    imgUrl: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },

  {
    modelName: "transfer",
    sequelize: db,
  }
);

export class Server extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }
}

Server.init(
  {
    serverId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },

    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },

    user_name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },

    tier: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },

    color: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    length: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    imgUrl: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    modelName: "server",
    sequelize: db,
  }
);

// Server.hasMany(User, { foreignKey: 'serverId'})
// User.belongsTo(Server, {foreignKey: 'serverId'})
// Transfer.belongsTo(Server, {foreignKey: 'username'})

// await db.sync({ force: true })

// await db.close()
