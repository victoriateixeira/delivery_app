module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
'User',
   {
id: { type: DataTypes.INTEGER, primaryKey: true }, 
name: DataTypes.STRING,
email: DataTypes.STRING,
password: DataTypes.STRING,
role: DataTypes.STRING,
  },
  {
    timestamps: false,
    underscored: true,
  },
  );
  User.associate = (models) => {
    User.hasMany(
models.Sales,
     { foreignKey: 'userId', as: 'userSales' },
);
  User.associate = (models) => {
    User.hasMany(
models.Sales,
     { foreignKey: 'sellerId', as: 'sellerSales' },
);
 };
  return User;
};
};