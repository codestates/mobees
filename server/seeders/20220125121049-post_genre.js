"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    let genre = [1, 2, 3, 4, 5, 6];
    let post = [];
    let data = [];
    for (let i = 65; i < 100; i++) {
      post.push(i);

      let obj = {
        post_id: i,
        genre_id: Math.floor(Math.random() * 6) + 1,
        createdAt: new Date()
          .toISOString()
          .replace(/T/, " ")
          .replace(/\..+/, ""),
        updatedAt: new Date()
          .toISOString()
          .replace(/T/, " ")
          .replace(/\..+/, ""),
      };

      data.push(obj);
    }
    return queryInterface.bulkInsert("posts_genres", data, {});
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("posts_genres", null, {});
  },
};
