module.exports = function(sequelize, DataTypes) {
  return sequelize.define("actor", {
      id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
      },
      name: DataTypes.STRING,
  })
};
