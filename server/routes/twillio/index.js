const router = require("express").Router();
const twillioController = require("../../controller/twillio/index");

module.exports = () => {
  router.post("/", async (req, res) => twillioController.create(req, res));

  return router;
};
