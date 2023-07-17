//! COMMENT MODEL
// This model is to create the Comment table in the database

const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Comment extends Model {}  // creating the Comment model by extending the sequelize Model class

// Defining the table columns and configuration, with all the fields
Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,  // the comment cannot be null
      primaryKey: true,  // and the id is the primary key
      autoIncrement: true,  // the id will auto increment 
    },
    comment_text: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],  // the comment must be at least one character long
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "user",
        key: "id",
      },
    },
    post_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "post",
        key: "id",
      },
    },
  },
  {
  sequelize,
  timestamps: true,  // timestamps are enabled
  freezeTableName: true,  // the table name will be the same as the model name
  underscored: true,  // the table name will be lowercase instead of camelcase
  modelName: "comment",
  }
  );
  
  module.exports = Comment;