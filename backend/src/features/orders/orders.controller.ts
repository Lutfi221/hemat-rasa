import { Envelope } from "@/types/envelope";
import {
  Body,
  Get,
  JsonController,
  Param,
  Post,
  UseBefore,
} from "routing-controllers";
import Container from "typedi";
import { OrdersService } from "./services/orders.service";
import { OpenAPI } from "routing-controllers-openapi";
import { ValidationMiddleware } from "@/middlewares/validation.middleware";
import { CreateOrderLineDto } from "./dtos/order-line.dto";

@JsonController("/orders/:orderId")
export class OrdersController {
  public order = Container.get(OrdersService);

  @Get()
  @OpenAPI({ summary: "Get order" })
  public async getOrder(@Param("orderId") orderId: number) {
    return new Envelope(await this.order.getOrder(orderId));
  }

  @Post("/order-lines")
  @UseBefore(ValidationMiddleware(CreateOrderLineDto))
  @OpenAPI({ summary: "Create order line" })
  public async createOrderLine(
    @Param("orderId") orderId: number,
    @Body() orderLineData: CreateOrderLineDto
  ) {
    return new Envelope(
      await this.order.createOrderLine(orderId, orderLineData)
    );
  }

  @Get("/order-lines")
  @OpenAPI({ summary: "Get order lines" })
  public async getOrderLines(@Param("orderId") orderId: number) {
    return new Envelope(await this.order.getOrderLines(orderId));
  }
}
