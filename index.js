const express = require("express");
const path = require("path");
const jsonData = require("./singer.json");
const { singer } = jsonData;

const app = express();

app.get("/", (req, res) => {
  res.send("網站首頁");
});

// http://localhost:3000/singer/3.html

app.get("/singer/:id.html", (req, res) => {
  const { id } = req.params;

  let result = singer.find((singer) => parseInt(id) === singer.id);

  if (result) {
    res.status(200).json(result);
  } else {
    res.status(404).json({ error: "找不到" });
  }
});

app.get("/netflix", (req, res) => {
  res.redirect("https://www.netflix.com/tw/");
});

app.get("/download", (req, res) => {
  res.download(path.resolve(__dirname, "singer.json"));
});

app.get("/content", (req, res) => {
  res.sendFile(path.resolve("test.html"));
});

app.listen(3000, () => {
  console.log("伺服器已啟動於 http://localhost:3000");
});
