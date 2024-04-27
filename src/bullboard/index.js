// bullBoardConfig.js
const { createBullBoard } = require("bull-board");
const { BullAdapter } = require("bull-board/bullAdapter");
const Queue = require("bull");
const redisConfig = require("../redis/redisClient"); // Assuming this is your Redis config file

// Initialize the Bull queue with the Redis configuration
const puppetQueue = new Queue("puppetQueue", { redis: redisConfig });
const lobMailQueue = new Queue("lobMailQueue", { redis: redisConfig });

// Setup and export BullBoard
const { router } = createBullBoard([
  new BullAdapter(puppetQueue),
  new BullAdapter(lobMailQueue),
]);

module.exports = {
  bullBoardRouter: router,
  puppetQueue,
  lobMailQueue, // Export if needed elsewhere in your app
};
