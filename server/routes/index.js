const router = require("express").Router();

const complimentsRouter = require("./compliments");
const giphyRouter = require("./giphy");

module.exports = function() {
  // Execute /api
  router.use("/compliments", complimentsRouter());
  router.use("/giphy", giphyRouter());

  return router;
};
