'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    static associate(models) {
      models.user.hasMany(models.post); 
      models.user.hasMany(models.comment); 
      models.user.hasMany(models.like); 
      
    }
  }
  user.init({
    user_name: {
      type: DataTypes.STRING, 
      allowNull: false,
    },
    phone_number: {
      type: DataTypes.STRING, 
      allowNull: false,
    },
    birthday: {
      type: DataTypes.DATEONLY, 
      allowNull: false,
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
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};