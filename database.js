const Sequelize = require("sequelize");
const dotenv = require("dotenv")
dotenv.config()
const sequelize = new Sequelize(
    process.env.MYSQL_DB,
    process.env.MYSQL_USER,
    process.env.MYSQL_PASSWORD,
    {
        host: process.env.MYSQL_HOST,
        dialect: 'mysql',
        define: {
            freezeTableName: true
        }
    }
);

sequelize.sync({ force: false }).then(() => {
    console.log('DB Connected ....');
}).catch((error) => {
    console.error('Unable to connect to the database : ', error);
});

module.exports = sequelize

