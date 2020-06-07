import path from "path";
require("dotenv").config({ path: path.resolve(__dirname, "..", ".env" ) });
console.log(path.resolve(__dirname, 'database', 'migrations'));
module.exports = {
    client: 'mysql2',
    connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE
    },
    migrations: {
        directory: path.resolve(__dirname, 'database', 'migrations')
    }
}