const knex = require("../../../db/index");

exports.list = async (req, res) => {
  try {
    knex
      .select()
      .table("compliments")
      .then(compliments => {
        res.json(compliments);
      });
  } catch (err) {
    console.error("Error loading compliments!", err);
    res.sendStatus(500);
  }
};

exports.create = async (req, res) => {
  try {
    const newItem = req.body;
    knex("compliments")
      .insert(newItem)
      .then(function(result) {
        res.json({ success: true, message: "ok" }); // respond back to request
      });
    knex
      .select()
      .table("compliments")
      .then(compliments => {
        console.log(compliments);
      });
    res.sendStatus(200);
  } catch (err) {
    console.error("Error saving compliment", err);
    res.sendStatus(500);
  }
};
