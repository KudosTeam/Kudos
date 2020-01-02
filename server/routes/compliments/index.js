const router = require("express").Router();
const complimentsController = require("../../controller/compliments/index");

module.exports = () => {
  router.get("/", async (req, res) => complimentsController.list(req, res));

  router.post("/", async (req, res) => complimentsController.create(req, res));

  return router;
};
