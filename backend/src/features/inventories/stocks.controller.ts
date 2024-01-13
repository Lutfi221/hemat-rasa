import {
  Body,
  Delete,
  Get,
  JsonController,
  Param,
  Patch,
  UseBefore,
} from "routing-controllers";
import { OpenAPI } from "routing-controllers-openapi";
import Container from "typedi";
import { InventoriesService } from "./inventories.service";
import { Envelope } from "@/types/envelope";
import { ValidationMiddleware } from "@/middlewares/validation.middleware";
import { UpdateStockDto } from "./dtos/stocks.dto";

@JsonController("/inventories/:inventoryId/stocks/:stockId")
export class StocksController {
  public inventory = Container.get(InventoriesService);

  @Get()
  @OpenAPI({ summary: "Get stock" })
  public async getStock(
    @Param("inventoryId") inventoryId: number,
    @Param("stockId") stockId: number
  ) {
    return new Envelope(await this.inventory.getStock(inventoryId, stockId));
  }

  @Patch()
  @UseBefore(ValidationMiddleware(UpdateStockDto, true))
  @OpenAPI({ summary: "Update stock" })
  public async updateStock(
    @Param("inventoryId") inventoryId: number,
    @Param("stockId") stockId: number,
    @Body() stockData: UpdateStockDto
  ) {
    return new Envelope(
      await this.inventory.updateStock(inventoryId, stockId, stockData)
    );
  }

  @Delete()
  @OpenAPI({ summary: "Delete stock" })
  public async deleteStock(
    @Param("inventoryId") inventoryId: number,
    @Param("stockId") stockId: number
  ) {
    return new Envelope(await this.inventory.deleteStock(inventoryId, stockId));
  }
}
