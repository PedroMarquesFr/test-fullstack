module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Roles', [
      {
        name: 'disabled',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'active',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'inactive',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'waiting',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Roles', null, {});
  },
};
