const router = require("express").Router();
const giphyController = require("../../controller/giphy/index");

module.exports = () => {
  router.get("/", async (req, res) => giphyController.list(req, res));
  return router;
};
