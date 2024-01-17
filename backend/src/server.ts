import { App } from "@/app";
import { UsersController } from "@/features/users/users.controller";
import { VendorsController } from "./features/vendors/vendors.controller";
import { InventoriesController } from "./features/inventories/inventories.controller";
import { ConsumersController } from "./features/consumer/consumers.controller";
import { CartsController } from "./features/orders/carts.controller";
import { OrdersController } from "./features/orders/orders.controller";
import { OrderLinesController } from "./features/orders/order-lines.controller";
import { StocksController } from "./features/inventories/stocks.controller";
import { ExplorationController } from "./features/exploration/exploration.controller";
import { AuthController } from "./features/auth/auth.controller";

const app = new App([
  UsersController,
  VendorsController,
  InventoriesController,
  ConsumersController,
  CartsController,
  OrdersController,
  OrderLinesController,
  StocksController,
  ExplorationController,
  AuthController,
]);
app.listen();
