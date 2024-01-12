import {
  Body,
  HttpCode,
  JsonController,
  Param,
  Post,
  UseBefore,
} from "routing-controllers";
import { CreateStockDto } from "./dtos/stocks.dto";
import Container from "typedi";
import { InventoriesService } from "./inventories.service";
import { OpenAPI } from "routing-controllers-openapi";
import { ValidationMiddleware } from "@/middlewares/validation.middleware";
import { Envelope } from "@/types/envelope";

@JsonController()
export class InventoriesController {
  public path = "/inventories";
  public inventory = Container.get(InventoriesService);

  @Post("/inventories/:inventoryId/stocks")
  @HttpCode(201)
  @UseBefore(ValidationMiddleware(CreateStockDto))
  @OpenAPI({ summary: "Create a new stock" })
  public async createStock(
    @Param("inventoryId") inventoryId: number,
    @Body() stockData: CreateStockDto
  ) {
    return new Envelope(this.inventory.createStock(inventoryId, stockData));
  }
}
