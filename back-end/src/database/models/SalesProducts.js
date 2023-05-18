const { NUMBER } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const SalesProducts = sequelize.define(

'SalesProducts',
  {
    productId: { type: DataTypes.INTEGER, primaryKey: true }, 
    saleId: { type: DataTypes.INTEGER, primaryKey: true }, 
    quantity: { type: DataTypes.NUMBER },
  },
  {
    timestamps: false,
    tableName: 'sales_products',
    underscored: true,

  },
);

  SalesProducts.associate = (models) => {
    models.Sale.belongsToMany(models.Product, {
      as: 'products',
      through: SalesProducts,
      foreignKey: 'saleId', 
      otherKey: 'productId', 
    });
    models.Product.belongsToMany(models.Sale, {
      as: 'sales',
      through: SalesProducts,
      foreignKey: 'productId', 
      otherKey: 'saleId',
    });
  };
 
  return SalesProducts;
};