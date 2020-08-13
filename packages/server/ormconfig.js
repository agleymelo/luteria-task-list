module.exports = [
  {
    name: "default",
    type: "postgres",
    host: "localhost",
    username: "docker",
    password: "docker",
    database: "luteria_pizza",
    synchronize: true,
    logging: true,
    entities: ["./src/modules/**/infra/typeorm/entities/*.ts"],
    migrations: ["./src/shared/infra/typeorm/migrations/*.ts"],

    cli: {
      migrationsDir: "./src/shared/infra/typeorm/migrations",
    },
  },
  {
    name: "test",
    type: "sqlite",
    database: "luteria-pizza-testing.sqlite",
    // synchronize: true,
    logging: false,
    dropSchema: true,
    migrationsRun: true,

    entities: ["./src/modules/**/infra/typeorm/entities/*.ts"],
    migrations: ["./src/shared/infra/typeorm/migrations/*.ts"],

    cli: {
      migrationsDir: "./src/shared/infra/typeorm/migrations",
    },
  },
];
