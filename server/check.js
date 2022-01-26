const dotenv = require("dotenv");
dotenv.config();

console.log({
  host: process.env.DATABASE_HOST,
  password: process.env.DATABASE_PASSWORD,
  user: process.env.DATABASE_USERNAME,
  port: process.env.DATABASE_PORT,
  databaseName: process.env.DATABASE_NAME,
  user_name: process.env.DATABASE_USERNAME,
  access_secret: process.env.ACCESS_SECRET,
});
