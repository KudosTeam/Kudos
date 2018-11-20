const fs = require("fs");

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("compliments")
    .del()
    .then(async () => {
      try {
        const compliments = JSON.parse(
          fs.readFileSync(__dirname + "/../../data/compliments.json")
        );
        for (const compliment of compliments) {
          await knex("compliments").insert({
            compliments: compliment.compliment
          });
        }
      } catch (err) {
        console.error("Inserting Errors", err);
      }
    });
};
