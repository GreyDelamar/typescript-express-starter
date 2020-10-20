import { createConnection } from "typeorm";
import path from 'path';
import config from '../config';

enum DatabaseType {
  MySQL = "mysql",
  MSSQL = "mssql",
  SQLite = "sqlite",
  MongoDB = "mongodb",
  MariaDB = "mariadb",
  Postgres = "postgres"
}

let configDatabaseType = <DatabaseType> config.db.type

export default async () => {
  return await createConnection({
      name: 'default',
      type: configDatabaseType,
      host: config.db.host,
      port: config.db.port,
      username: config.db.username,
      password: config.db.password,
      database: config.db.database,
      /*options: {
        enableArithAbort: true,
      },*/
      entities: [
        path.join(__dirname, "../api/models/entities/*.ts")
      ],
  });
}
