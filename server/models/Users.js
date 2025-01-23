import { DataTypes } from 'sequelize';
import sequelize from "../config/mysql_db.js";

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    profile_pic: {
        type: DataTypes.STRING,
        allowNull: true
    }
},
    {
        tableName: 'users',
        timestamps: true
    }
);

export default User;