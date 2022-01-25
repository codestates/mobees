"use strict";
const { Model } = require("sequelize");
// const image = require("../Image");
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    static associate(models) {
      models.user.hasMany(models.post);
      models.user.hasMany(models.comment);
      models.user.hasMany(models.like);
    }
  }
  user.init(
    {
      user_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone_number: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      birthday: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      nickname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      profile_image: {
        type: DataTypes.BLOB,
        defaultValue: "",
      },
    },
    {
      sequelize,
      modelName: "user",
    }
  );
  return user;
};
