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
      totalPrice: { type: Sequelize.DECIMAL(9, 2), allowNull: false, field: 'total_price' },
      deliveryAddress: { type: Sequelize.STRING, allowNull: false, field: 'delivery_address' },
      deliveryNumber: { type: Sequelize.STRING, allowNull: false, field: 'delivery_number' },
      saleDate: { type: Sequelize.DATE, allowNull: false, field: 'sale_date' },
      status: { type: Sequelize.STRING, defaultValue: 'PENDENTE', allowNull: false },
    });
  },
};