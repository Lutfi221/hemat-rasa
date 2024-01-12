import config from "config";

const SERVER_CONFIG = config.get("server");
const LOGGING_CONFIG = config.get("logging");
const DB_CONFIG = config.get("db");

export { SERVER_CONFIG, LOGGING_CONFIG, DB_CONFIG };
export const { NODE_ENV } = process.env;
