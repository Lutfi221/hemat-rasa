import { App } from "@/app";
import { UsersController } from "@/features/users/users.controller";
import { VendorsController } from "./features/vendors/vendors.controller";
import { InventoriesController } from "./features/inventories/inventories.controller";
import { ConsumersController } from "./features/consumer/consumers.controller";

const app = new App([
  UsersController,
  VendorsController,
  InventoriesController,
  ConsumersController,
]);
app.listen();
