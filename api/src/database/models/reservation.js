module.exports = function(sequelize, DataTypes) {
  return sequelize.define("reservation", {
      id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
      },
      date: DataTypes.DATE,
      time: DataTypes.STRING,
      firstname: DataTypes.STRING,
      lastname: DataTypes.STRING,
      email: DataTypes.STRING,
      phone: DataTypes.STRING,
  })
};
