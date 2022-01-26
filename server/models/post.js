"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class post extends Model {
    static associate(models) {
      models.post.belongsTo(models.user, {
        foreignKey: "user_id",
      });
      models.post.hasMany(models.like, {
        foreignKey: "post_id",
      });
      models.post.hasMany(models.comment, {
        foreignKey: "post_id",
      });

      models.post.belongsToMany(models.genre, {
        through: models.posts_genres,
        foreignKey: "post_id",
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        sourceKey: "id",
      });

      // models.post.sync({force: true, match: /_test$/});
    }
  }
  post.init(
    {
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      total_likes: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      total_comments: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      movie_title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      movie_theater: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      movie_date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      movie_time: {
        type: DataTypes.TIME,
        allowNull: false,
      },
      movie_seat: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      movie_review: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "post",
    }
  );
  return post;
};
