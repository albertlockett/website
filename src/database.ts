import * as Sequelize from 'sequelize';

const DBNAME = 'lockett';
const DBUSER = 'root';
const DBPASSWORD = 'password';
const DBHOST = 'localhost';
const DBPORT = 6603;

const sequelize = new Sequelize(DBNAME, DBUSER, DBPASSWORD, {
  dialect: 'mysql',
  host: DBHOST,
  port: DBPORT,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

export const Mail = sequelize.define('mail', {
  id: {
    autoIncrement: true,
    field: 'mail_id',
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  receiver: {
    type: Sequelize.STRING,
    allowNull: false
  },
  sender: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, {
  tableName: 'mail',
  timestamps: false
});
