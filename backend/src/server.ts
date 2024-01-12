import { App } from "@/app";
import { UsersController } from "@/features/users/users.controller";
import { VendorsController } from "./features/vendors/vendors.controller";
import { InventoriesController } from "./features/inventories/inventories.controller";

const app = new App([
  UsersController,
  VendorsController,
  InventoriesController,
]);
app.listen();
