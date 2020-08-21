require("dotenv").config();
const mysql = require("mysql");

const connection = mysql.createConnection({
   host: process.env.RDS_HOST,
   user: process.env.RDS_USER,
   password: process.env.RDS_PASSWORD,
   database: "demo_app",
});

connection.connect();

connection.query("SELECT 1 + 1 AS solution", function (error, results, fields) {
   if (error) throw error;
   console.log("The solution is: ", results[0].solution);
});

connection.end();
