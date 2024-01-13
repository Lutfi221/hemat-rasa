import {
  Body,
  Delete,
  Get,
  JsonController,
  Param,
  Patch,
  UseBefore,
} from "routing-controllers";
import Container from "typedi";
import { OrdersService } from "./services/orders.service";
import { OpenAPI } from "routing-controllers-openapi";
import { ValidationMiddleware } from "@/middlewares/validation.middleware";
import { CreateOrderLineDto } from "./dtos/order-line.dto";
import { Envelope } from "@/types/envelope";
import { AppDataSource } from "@/data-source";
import { OrderLineEntity } from "./entities/order-line.entity";

@JsonController("/orders/:orderId/order-lines/:orderLineId")
export class OrderLinesController {
  public order = Container.get(OrdersService);

  @Get()
  @OpenAPI({ summary: "Get an order line" })
  public async getOrderLine(
    @Param("orderId") orderId: number,
    @Param("orderLineId") orderLineId: number
  ) {
    const repo = AppDataSource.getRepository(OrderLineEntity);
    const orderLine = await repo.findOne({
      where: { id: orderLineId, orderId },
    });

    return new Envelope(orderLine);
  }

  @Patch()
  @UseBefore(ValidationMiddleware(CreateOrderLineDto, true))
  @OpenAPI({ summary: "Update an order line" })
  public async updateOrderLine(
    @Param("orderId") orderId: number,
    @Param("orderLineId") orderLineId: number,
    @Body() orderLineData: CreateOrderLineDto
  ) {
    const repo = AppDataSource.getRepository(OrderLineEntity);
    const orderLine = await repo.findOne({
      where: { id: orderLineId, orderId },
    });

    return new Envelope(await repo.save({ ...orderLine, ...orderLineData }));
  }

  @Delete()
  @OpenAPI({ summary: "Delete an order line" })
  public async deleteOrderLine(
    @Param("orderId") orderId: number,
    @Param("orderLineId") orderLineId: number
  ) {
    const repo = AppDataSource.getRepository(OrderLineEntity);
    const orderLine = await repo.findOne({
      where: { id: orderLineId, orderId },
    });

    return new Envelope(await repo.remove(orderLine));
  }
}
