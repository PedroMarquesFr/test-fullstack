module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {
        roleId: 2,
        displayName: 'João',
        email: 'joao@gmail.com',
        document: '096.644.860-00',
        phone:'(61) 2981-8874',
      },
      {
        roleId: 1,
        displayName: 'Michael',
        email: 'michael10@gmail.com',
        document: '392.446.260-71',
        phone:'(21) 3569-0167',
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
