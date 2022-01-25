'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class like extends Model {
    static associate(models) {
      models.like.belongsTo(models.user);
      models.like.belongsTo(models.post);
    }
  }
  like.init({
    user_id: {
      type: DataTypes.INTEGER, 
      allowNull: false
    },
    post_id: {
      type: DataTypes.INTEGER, 
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'like',
  });
  return like;
};