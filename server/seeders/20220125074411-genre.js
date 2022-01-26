"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    let genre = ["horror", "romance", "comic", "action", "fantasy", "SF"];
    let datas = [];
    for (let i = 0; i < genre.length; i++) {
      let obj = {
        genre: genre[i],
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

    return queryInterface.bulkInsert("genres", datas, {});
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("genres", null, {});
  },
};
