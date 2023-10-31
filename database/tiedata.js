import { DataType, DataTypes, Model } from "sequelize";
import util from 'util'
import connectToDB from "./db.js";

const db = await connectToDB('postgresql:///tiedata.sql')

export class User extends Model {
    [util.inspect.custom]() {
        return this.toJSON()
    }
}

User.init({

    id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        },
    
    user_name: {
        type: DataTypes.VARCHAR(100),
        allowNull: false
        },
    
    tier:{
        type: DataTypes.VARCHAR(100),
        allowNull: false,
        },

    color: {
        type: DataTypes.VARCHAR(100),
        allowNull: false,
    },
    length: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    imgUrl: {
        type: DataTypes.TEXT,
        allowNull: true,
      }

  
})


export default db
