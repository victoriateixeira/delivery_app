module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    'Product',
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }, 
      name: DataTypes.STRING,
      price: DataTypes.DECIMAL(9, 2),
      urlmage: { type: DataTypes.STRING, field: 'url_image' },
    },
    {
      timestamps: false,
      tableName: 'products',
      modelName: 'Product',
    },
  );
  return Product;
};