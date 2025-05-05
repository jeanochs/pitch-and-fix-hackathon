require("dotenv").config();

const { Client } = require("pg");

const env_host = process.env.HOST;
const env_port = process.env.PORT;
const env_user = process.env.DBUSER;
const env_password = process.env.PASSWORD;
const env_database = process.env.DATABASE;

const client = new Client({

	host: env_host,
	port: env_port,
	user: env_user,
	password: env_password,
	database: env_database
});

client.connect()
	.then(() => console.log("Connected to PostgreSQL."))
	.catch(err => ("Connection error:", err.stack));

module.exports = client;
