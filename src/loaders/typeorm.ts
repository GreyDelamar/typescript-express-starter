import { createConnection } from "typeorm";
import path from 'path';
import config from '../config';

export default async () => {
  return await createConnection({
      name: 'default',
      type: 'mssql',
      host: config.db.host,
      port: config.db.port,
      username: config.db.username,
      password: config.db.password,
      database: config.db.database,
      options: {
        enableArithAbort: true,
      },
      entities: [
        path.join(__dirname, "../api/models/entities/*.ts")
      ],
  });
}
