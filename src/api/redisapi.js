// src/api/index.js
const express = require("express");
const { router: bullBoardRouter } = require("bull-board");
const { puppetQueue } = require("../queues/puppetQueue");

const router = express.Router();
bullBoardRouter.setQueues([new BullAdapter(puppetQueue)]);
router.use("/queues", bullBoardRouter);

module.exports = router;
