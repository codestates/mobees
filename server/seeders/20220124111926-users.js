"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    let datas = [];
    for (let i = 0; i < 5; i++) {
      let obj = {
        email: "test" + i + "example.com",
        phone: "010" + i + "111" + i + "222",
        password: "testUser" + i,
        createdAt: new Date(),
      };
    }
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
