/**
* @param {import('sequelize').Sequelize} sequelize
* @param {import('sequelize').DataTypes} sequelize.DataTypes
*/

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('products', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      name: { type: Sequelize.STRING, allowNull: false },
      price: { type: Sequelize.DECIMAL(4, 2), allowNull: false },
      urlImage: { type: Sequelize.STRING, allowNull: false },
    });
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('products');
  },
};
