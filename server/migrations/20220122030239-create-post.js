'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER
      },
      image: {
        type: Sequelize.BLOB
      },
      total_likes: {
        type: Sequelize.INTEGER
      },
      total_comments: {
        type: Sequelize.INTEGER
      },
      movie_title: {
        type: Sequelize.STRING
      },
      movie_theater: {
        type: Sequelize.STRING
      },
      movie_date: {
        type: Sequelize.DATEONLY
      },
      movie_time: {
        type: Sequelize.TIME
      },
      movie_seat: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('posts');
  }
};