const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("ExpenseTracker", "root", "shantanu@123", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
