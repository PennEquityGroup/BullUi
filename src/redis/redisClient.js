const Redis = require("ioredis");
const dotenv = require("dotenv");

dotenv.config();

const redisConfig = {
  host: process.env.REDIS_HOST,
  port: parseInt(process.env.REDIS_PORT, 10),
  password: process.env.REDIS_PASSWORD,
};

module.exports = redisConfig;
