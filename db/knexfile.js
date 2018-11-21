module.exports = {
  client: "postgresql",
  connection:
    process.env.DATABASE_URL ||
    `postgres://${process.env.USER}@127.0.0.1:5432/kudos_app`,
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: "knex_migrations"
  },
  seeds: {
    tableName: "knex_migrations"
  }
};
