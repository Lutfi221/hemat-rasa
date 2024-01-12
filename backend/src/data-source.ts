import path from "path";
import { SnakeNamingStrategy } from "typeorm-naming-strategies";
import { DB_CONFIG } from "./app-config";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: DB_CONFIG.host,
  port: 5432,
  username: DB_CONFIG.username,
  password: DB_CONFIG.password,
  database: DB_CONFIG.database,
  synchronize: true,
  logging: false,
  subscribers: [],
  migrations: [],
  entities: [path.join(__dirname, "./features/**/*.entity{.ts,.js}")],
  namingStrategy: new SnakeNamingStrategy(),
});

AppDataSource.initialize()
  .then(() => {
    console.log("Database connected");
  })
  .catch((error) => console.log(error));
