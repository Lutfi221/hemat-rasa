import config from "config";

const SERVER_CONFIG = config.get("server");
const LOGGING_CONFIG = config.get("logging");

export { SERVER_CONFIG, LOGGING_CONFIG };
export const { NODE_ENV } = process.env;
