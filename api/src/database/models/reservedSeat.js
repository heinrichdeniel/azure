module.exports = function(sequelize, DataTypes) {
  return sequelize.define("reservedSeat", {
      id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
      },
      row: DataTypes.INTEGER,
      column: DataTypes.INTEGER
  })
};
