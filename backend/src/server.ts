import { App } from "@/app";
import { UsersController } from "@/features/users/users.controller";
import { VendorsController } from "./features/vendors/vendors.controller";
import { InventoriesController } from "./features/inventories/inventories.controller";
import { ConsumersController } from "./features/consumer/consumers.controller";
import { CartsController } from "./features/orders/carts.controller";
import { OrdersController } from "./features/orders/orders.controller";

const app = new App([
  UsersController,
  VendorsController,
  InventoriesController,
  ConsumersController,
  CartsController,
  OrdersController,
]);
app.listen();
