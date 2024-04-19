const express = require("express");
const { createBullBoard } = require("bull-board");
const { BullAdapter } = require("bull-board/bullAdapter");
const Bull = require("bull");

const app = express();
const PORT = process.env.PORT || 3000;

// Configure Redis connection for Bull
const redisOptions = {
  redis: {
    host: "YOUR_REDIS_HOST", // Replace with your Redis host
    port: 6379, // Default Redis port
    password: "YOUR_REDIS_PASSWORD", // Your Redis password
  },
};

// Initialize the Bull queue
const queue = new Bull("yourQueueName", redisOptions);

// Initialize BullBoard
const { router: bullBoardRouter } = createBullBoard([new BullAdapter(queue)]);

// Use BullBoard router in your Express app
app.use("/admin/queues", bullBoardRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
