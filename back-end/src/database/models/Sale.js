/* eslint-disable max-lines-per-function */
module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define(

'Sale',
   {
id: { type: DataTypes.INTEGER, primaryKey: true }, 
userId: DataTypes.INTEGER,
sellerId: DataTypes.INTEGER,
totalPrice: DataTypes.DECIMAL(9, 2),
deliveryAddress: DataTypes.STRING,
deliveryNumber: DataTypes.STRING,
saleDate: DataTypes.DATE,
status: DataTypes.STRING,
  },
  {
    timestamps: false,
    underscored: true,
  },
  );
  Sale.associate = (models) => {
    // define o tipo de relacionamento
        Sale.belongsTo(

models.User,
        // define qual a foreign key a ser criada
          { foreignKey: 'userId', as: 'user' },

);
        Sale.belongsTo(

models.User,
        // define qual a foreign key a ser criada
          { foreignKey: 'sellerId', as: 'seller' },

);
      };
  return Sale;
};