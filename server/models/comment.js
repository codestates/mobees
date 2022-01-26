"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class comment extends Model {
    static associate(models) {
      models.comment.belongsTo(models.user, {
        foreignKey: "user_id",
      });
      models.comment.belongsTo(models.post, {
        foreignKey: "post_id",
      });
    }
  }
  comment.init(
    {
      comment: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      post_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "comment",
    }
  );
  return comment;
};
