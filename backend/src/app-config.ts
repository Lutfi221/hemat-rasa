import config from "config";

const SERVER_CONFIG = config.get("server");
const LOGGING_CONFIG = config.get("logging");
const DB_CONFIG = config.get("db");
const AUTH_CONFIG = config.get("auth");

export { SERVER_CONFIG, LOGGING_CONFIG, DB_CONFIG, AUTH_CONFIG };
export const { NODE_ENV } = process.env;
