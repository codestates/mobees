'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('likes', {
      fields: ['post_id'], 
      type: 'foreign key', 
      name: 'FK_likes_post_id', 
      references: {
        table: 'posts', 
        field: 'id'
      }, 
      onDelete: 'cascade', 
      onUpdate: 'cascade'
    })

    await queryInterface.addConstraint('comments', {
      fields: ['post_id'], 
      type: 'foreign key', 
      name: 'FK_comment_post_id', 
      references: {
        table: 'posts', 
        field: 'id'
      }, 
      onDelete: 'cascade', 
      onUpdate: 'cascade'
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('comments', 'FK_comment_post_id'); 
    await queryInterface.removeConstraint('likes', 'FK_likes_post_id');
  }
};
