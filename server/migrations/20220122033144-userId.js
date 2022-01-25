'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('posts', {
      fields: ['user_id'], 
      type: 'foreign key', 
      name: 'FK_posts_user_id', 
      references: {
        table: 'users', 
        field: 'id'
      }, 
      onDelete: 'cascade', 
      onUpdate: 'cascade'
    })
    
    await queryInterface.addConstraint('likes', {
      fields: ['user_id'], 
      type: 'foreign key', 
      name: 'FK_likes_user_id', 
      references: {
        table: 'users', 
        field: 'id'
      }, 
      onDelete: 'cascade', 
      onUpdate: 'cascade'
    })

    await queryInterface.addConstraint('comments', {
      fields: ['user_id'], 
      type: 'foreign key', 
      name: 'FK_comments_user_id', 
      references: {
        table: 'users', 
        field: 'id'
      }, 
      onDelete: 'cascade', 
      onUpdate: 'cascade'
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('comments', 'FK_comments_user_id'); 
    await queryInterface.removeConstraint('likes', 'FK_likes_user_id');
    await queryInterface.removeConstraint('posts', 'FK_posts_user_id');
  }
};
