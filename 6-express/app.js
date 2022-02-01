import express from "express";

const app = express();

app.all("/all", (req, res, next) => {
  // exact
  console.log("all");
  next();
});

app.use("/api", (req, res, next) => {
  //start with
  console.log("use");
  next();
});

app.get("/", (req, res, next) => {
  console.log("get");
  res.setHeader("key", "value");
  res.next(new Error());
  res.send("hi");
});

app.use((req, res, next) => {
  res.send("sorry, 404");
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send("sorry error");
});

app.listen(8080, () => {
  console.log("server is on 8080...");
});
