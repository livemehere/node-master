import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import cors from "cors";

import tweetRouter from "./router/tweetRouter.js";

const app = express();

app.use(cors());
app.use(morgan({ format: "dev" }));
app.use(helmet());

app.use(express.static("public"));

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/tweet", tweetRouter);

app.use((req, res, next) => {
  res.status(404).send("404 not found");
});

app.use((err, req, res, next) => {
  console.log(err.message);
  res.status(500).send(err.message);
});

app.listen(3000, () => {
  console.log("server is running on 3000");
});
