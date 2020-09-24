const express = require("express");
const app = express();

app.use(express.static("dist"));

app.get("/", (req, res) => {
  res.send("Home for Web component");
});

const PORT = 3300;

app.listen(PORT, () => {
  console.log(`listening to port: ${PORT}`);
});
