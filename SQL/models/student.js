const { DataTypes } = require("sequelize");       // data type batane ke liye 
const sequelize = require("../config/db");

const Student = sequelize.define("Student", {

    username: {
        type: DataTypes.STRING,
        allowNull: false
    },

    age: {
        type: DataTypes.INTEGER
    },

    phone: {
        type: DataTypes.BIGINT
    },

    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    }

});

module.exports = Student;