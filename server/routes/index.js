const router = require("express").Router();

const complimentsRouter = require("./compliments");
const giphyRouter = require("./giphy");
const twillioRouter = require("./twillio");

module.exports = function() {
  // Execute /api
  router.use("/compliments", complimentsRouter());
  router.use("/giphy", giphyRouter());
  router.use("/twillio", twillioRouter());

  return router;
};
