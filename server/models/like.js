"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class like extends Model {
    static associate(models) {
      models.like.belongsTo(models.user, {
        foreignKey: "user_id",
      });
      models.like.belongsTo(models.post, {
        foreignKey: "post_id",
      });
    }
  }
  like.init(
    {
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
      modelName: "like",
    }
  );
  return like;
};
