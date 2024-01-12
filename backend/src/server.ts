import { App } from "@/app";
import { UsersController } from "@/features/users/users.controller";

const app = new App([UsersController]);
app.listen();
