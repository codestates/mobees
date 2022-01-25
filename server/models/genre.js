'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class genre extends Model {
    static associate(models) {
      models.genre.belongsToMany(models.post, {
        through: "Post_Genre", 
        foreignKey: 'genre_id',
        onUpdate: 'CASCADE', 
        onDelete: 'CASCADE', 
        sourceKey: 'id'  
      })
      // models.genre.sync({force: true, match: /_test$/}); 
    }
  }
  genre.init({
    genre: {
      type: DataTypes.STRING, 
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'genre',
  });
  return genre;
};