exports.up = function(knex, Promise) {
  return knex.schema.dropTableIfExists("compliments").then(() => {
    return knex.schema.createTable("compliments", table => {
      table.increments().index();

      table.text("compliments").notNullable();

      table.timestamp("created_at").defaultTo(knex.fn.now());
    });
  });
};

exports.down = function(knex, Promise) {};
