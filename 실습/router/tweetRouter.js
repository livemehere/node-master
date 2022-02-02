import express from "express";
import * as tweetController from "../controller/tweetController.js";

const router = express.Router();

router.get("/", tweetController.getTweet);

router.get("/:id", tweetController.getTweetById);

router.post("/", tweetController.createTweet);

router.delete("/", tweetController.removeTweet);

router.put("/", tweetController.modifyTweet);

export default router;
