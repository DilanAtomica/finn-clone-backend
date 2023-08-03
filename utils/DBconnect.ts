const mysql = require("mysql2");
const dotenv = require("dotenv")

const {DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE, DB_PORT} = dotenv.config().parsed;

const db = mysql.createPool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    port: DB_PORT
}).promise();

module.exports = {db};
