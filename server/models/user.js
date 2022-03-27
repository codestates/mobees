"use strict";
const { Model } = require("sequelize");
// const profileImage = require("../Image/userIcon.png");
// const blob = new Blob(new Uint8Array(data), { type: "image/png" });

module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    static associate(models) {
      models.user.hasMany(models.post, {
        foreignKey: "user_id",
      });
      models.user.hasMany(models.comment, {
        foreignKey: "user_id",
      });
      models.user.hasMany(models.like, {
        foreignKey: "user_id",
      });
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
        type: DataTypes.STRING,
        defaultValue:
          "https://media.vlpt.us/images/ez0ez0/post/c1a36b5d-99b3-49c1-b756-af1f664cb803/bee.png",
      },
    },
    {
      sequelize,
      modelName: "user",
    }
  );
  return user;
};
