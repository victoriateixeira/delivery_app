/**
* @param {import('sequelize').Sequelize} sequelize
* @param {import('sequelize').DataTypes} sequelize.DataTypes
*/

module.exports = {
  up: async (queryInterface, Sequelize) => {
  await queryInterface.createTable('users', {
id:{
  primaryKey: true,
  type: Sequelize.INTEGER,
  allowNull: false,
  autoIncrement: true,
},
name: {
  type: Sequelize.STRING,
  allowNull: false,
},

email: {
  type: Sequelize.STRING,
  allowNull: false,
  unique: true,
},
password: {
  type: Sequelize.STRING,
  allowNull: false,
},
role: {
  type: Sequelize.STRING,
  allowNull: false,
},
  });
  },

  down: async (queryInterface, _Sequelize) => {
 await queryInterface.dropTable('users');
  }
};
