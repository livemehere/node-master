import "express-async-errors";

export function getTweet(req, res, next) {
  throw new Error("에러발생");
  res.send("/tweet");
}
export async function getTweetById(req, res, next) {
  const id = req.params.id;
  throw new Error("비동기에러");
  res.send(`/tweet/${id}`);
}
export function createTweet(req, res, next) {
  res.send("POST /tweet");
}
export function removeTweet(req, res, next) {
  res.send("DELETE tweet");
}
export function modifyTweet(req, res, next) {
  res.send("PUT tweet");
}
