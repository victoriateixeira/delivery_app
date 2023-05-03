/**
* @param {import('sequelize').Sequelize} sequelize
* @param {import('sequelize').DataTypes} sequelize.DataTypes
*/

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('sales_products', {
      saleId: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'sale_id',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references:{
          model: 'sales',
          key: 'id',
        }
      },
      productId: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'product_id',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references:{
          model: 'products',
          key: 'id',
      },
    },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
   
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('sales_products');
  }
};
