module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
'Product',
   {
    id: { type: DataTypes.INTEGER, primaryKey: true }, 
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL(9, 2),
    url_image: DataTypes.STRING,
  },
  {
    timestamps: false,
    underscored: true,
  },
  );
 
  return Product;
};
