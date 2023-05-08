const defineUser = (sequelize, DataTypes) => sequelize.define(
  'User',
    {
      id: { type: DataTypes.INTEGER, primaryKey: true }, 
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      role: DataTypes.STRING,
    },
    { timestamps: false, underscored: true, tableName: 'users' },
  );

module.exports = (sequelize, DataTypes) => {
  const User = defineUser(sequelize, DataTypes);
  User.associate = (models) => {
    User.hasMany(
      models.Sale,
      { foreignKey: 'userId', as: 'userSales' },
      { foreignKey: 'sellerId', as: 'seller' },
    );
  };

  return User;
};