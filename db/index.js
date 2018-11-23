const Knex = require("knex");

const knex = Knex({
  client: "pg",
  // connection: {
  //   database: "compliments",
  //   user: "postgres",
  // },
  connection:
    process.env.DATABASE_URL ||
    `postgres://${process.env.USER}@127.0.0.1:5432/kudos_app`,
  searchPath: "public"
});

module.exports = knex;
