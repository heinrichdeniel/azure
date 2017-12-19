module.exports = function(sequelize, DataTypes) {
  return sequelize.define("movie", {
      id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
      },
      title: {
          type: DataTypes.STRING,
          unique: true
      },
      description: DataTypes.TEXT,
      length: DataTypes.STRING,
      photo_url: DataTypes.STRING,
      genre: DataTypes.STRING
  })
};
