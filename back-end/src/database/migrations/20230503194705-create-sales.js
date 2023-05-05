/**
* @param {import('sequelize').Sequelize} sequelize
* @param {import('sequelize').DataTypes} sequelize.DataTypes
*/

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('sales', {
      id: { primaryKey: true, type: Sequelize.INTEGER, allowNull: false, autoIncrement: true },
      userId: { type: Sequelize.INTEGER,
        field: 'user_id',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: { model: 'users', key: 'id' } },
      sellerId: { type: Sequelize.INTEGER,
        field: 'seller_id',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: { model: 'users', key: 'id' } },
      totalPrice: { type: Sequelize.DECIMAL(9, 2), allowNull: false },
      deliveryAddress: { type: Sequelize.STRING, allowNull: false },
      deliveryNumber: { type: Sequelize.STRING, allowNull: false },
      saleDate: { type: Sequelize.DATE, allowNull: false },
      status: { type: Sequelize.STRING, allowNull: false },
    });
  },

//   down: async (queryInterface, Sequelize) => {
//  await queryInterface.dropTable('sales');
//   },
};