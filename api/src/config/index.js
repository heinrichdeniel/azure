module.exports = {
  database: {
    host: process.env.DB_MYSQL_HOST || 'movies-db.cohhqh10vmms.eu-west-1.rds.amazonaws.com',
    port: process.env.DB_MYSQL_PORT || 5432,
    db: process.env.DB_MYSQL_NAME || 'movies',
    username: process.env.DB_MYSQL_USER || 'movies',
    password: process.env.DB_MYSQL_PASS || 'movies-db'
  },
  app: {
      port: process.env.PORT || 9601,
      token: process.env.TOKEN_SECRET || 'MySuPeRsEcReTtOkEn'
  },
};
