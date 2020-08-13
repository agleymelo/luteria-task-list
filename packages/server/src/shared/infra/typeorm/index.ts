import { getConnectionOptions, createConnection, Connection } from "typeorm";

export const createTypeORM = async (): Promise<Connection> => {
  const connectionOptions = await getConnectionOptions(process.env.NODE_ENV);
  return createConnection({ ...connectionOptions, name: "default" });
};
