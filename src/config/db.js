import mysql from "mysql2";

const connection = mysql
  .createConnection({
    host: "127.0.0.1",
    user: "root",
    password: process.env.DB,
    database: "alimentea",
  })
  .promise();

export default connection;
