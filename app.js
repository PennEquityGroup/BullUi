// app.js
const express = require("express");
const { bullBoardRouter } = require("./src/bullboard/index");

const app = express();
const PORT = process.env.PORT || 8080;

// Use BullBoard router in your Express app
app.use("/admin/queues", bullBoardRouter);

app.get("/", (req, res) => {
  res.send("Welcome to the home page!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`BullBoard is running at http://localhost:${PORT}/admin/queues`);
});
