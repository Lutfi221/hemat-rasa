import { App } from "@/app";
import { ValidateEnv } from "@utils/validateEnv";

ValidateEnv();

const app = new App([]);
app.listen();
