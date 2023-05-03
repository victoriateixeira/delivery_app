const { NUMBER } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  const SalesProducts = sequelize.define('SaleProduct',
  {
    postId: { type: DataTypes.INTEGER, primaryKey: true}, 
    categoryId: { type: DataTypes.INTEGER, primaryKey: true}, 
    quantity: {type: DataTypes.NUMBER}
      },
  {
    timestamps: false,
    tableName: 'sales_products',
    underscored: true,

  } );
  SalesProducts.associate = (models) => {
    models.Sale.hasMany(models.Product, {
      as: 'products',
      through: SalesProducts,
      foreignKey: 'productId', // se refere ao id de Book na tabela de `users_books`
      otherKey: 'saleId', // se refere a outra chave de `users_books`
    });
    models.Product.hasMany(models.Sale, {
      as: 'sales',
      through: SalesProducts,
      foreignKey: 'saleId', // se refere ao id de User na tabela de `users_books`
      otherKey: 'productId',
    });
  };
 
  return SalesProducts;
}