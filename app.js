const express = require("express");
const path = require("path");

const app = express();
const myLogger = (req, res, next) => {
  console.log("MiddleWare log 1");
  next();
};
const myLogger2 = (req, res, next) => {
  console.log("MiddleWare log 2");
  next();
};

// MIDDLEWARES
app.use(express.static("public"));

app.get("/", (req, res) => {
  // dosyayo içeri çektik
  // express static middleware kullandık
  res.sendFile(path.resolve(__dirname, "tmp/index.html"));
});
const port = 3000;
app.listen(port, () => {
  console.log(`sunucu ${port} portunda başlatıldı`);
});
