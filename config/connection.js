const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.JAWSDB_URL) {  
  sequelize = new Sequelize(process.env.JAWSDB_URL);  // if JAWSDB_URL exists, then we'll create a new instance of Sequelize using that variable
} else {   // otherwise, we will proceed with our local database in localhost
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    }
  );
}

module.exports = sequelize;
