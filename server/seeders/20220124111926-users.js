"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    let datas = [];
    for (let i = 0; i < 35; i++) {
      let obj = {
        email: "test" + i + "example.com",
        phone_number: "010" + i + "111" + i + "222",
        password: "testUser" + i,
        nickname: "test" + i,
        birthday: new Date()
          .toISOString()
          .replace(/T/, " ")
          .replace(/\..+/, ""),
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

    return queryInterface.bulkInsert("users", datas, {});
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("users", null, {});
  },
};
