// Declaring all the dependencies, includding bcrypt for password hashing
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class User extends Model {  // creating the User model by extending the sequelize Model class
  checkPassword(loginPw) {  // checking the password by using the bcrypt method
    return bcrypt.compareSync(loginPw, this.password);  // comparing the password with the hashed password
  }
}

// Defining the table columns and configuration, with all the fields
User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [6],  // the password must be at least 6 characters long 
      },
    },
  },

  {  // Using the beforeCreate and beforeUpdate hooks to hash the password before the data is created or updated
    hooks: {
      async beforeCreate(newUser) {
        newUser.password = await bcrypt.hash(newUser.password, 10);  // hashing the password with the bcrypt method and the salt
        return newUser;
      },
      async beforeUpdate(updatedUser) {
        updatedUser.password = await bcrypt.hash(updatedUser.password, 10);  // 10 is the salt
        return updatedUser;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }
);

module.exports = User;
