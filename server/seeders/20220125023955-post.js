"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    let datas = [];
    for (let i = 1; i < 34; i++) {
      let obj = {
        movie_title: `test${i}`,
        movie_theater: `test${i} 상영관`,
        movie_date: "2022-01-25",
        movie_time: `05:${i}:${i}`,
        movie_seat: `A${i}`,
        movie_review: `yeah~~! happy~~ ${i}`,
        total_likes: i,
        total_comments: i,
        createdAt: new Date()
          .toISOString()
          .replace(/T/, " ")
          .replace(/\..+/, ""),
        updatedAt: new Date()
          .toISOString()
          .replace(/T/, " ")
          .replace(/\..+/, ""),
      };

      datas.push(obj);
    }

    return queryInterface.bulkInsert("posts", datas, {});
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("posts", null, {});
  },
};
