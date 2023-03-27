const db = require("mysql2-promise")();
const dotEnv = require("dotenv")
dotEnv.config()

//fcion config pone a disposicion de nosotros  las variables de entorno
//q configuramos en .env 
//.env: enviroment (entorno)
const config = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,

}


db.configure(config)
module.exports = db