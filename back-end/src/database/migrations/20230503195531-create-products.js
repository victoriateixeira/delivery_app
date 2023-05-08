/**
* @param {import('sequelize').Sequelize} sequelize
* @param {import('sequelize').DataTypes} sequelize.DataTypes
*/

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('products', {
      id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      price: {
        type: Sequelize.DECIMAL(4,2),
        allowNull: false,
      },
      urlImage: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'url_image',
      }
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('products');
  }
};

