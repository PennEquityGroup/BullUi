const express = require("express");
const { engine } = require("express-handlebars");
const { bullBoardRouter } = require("./src/bullboard/index");

const app = express();
const PORT = process.env.PORT || 8080;

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

app.use(express.static("public"));

// Use BullBoard router
app.use("/admin", bullBoardRouter);

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`BullBoard is running at http://localhost:${PORT}/admin/queues`);
});
