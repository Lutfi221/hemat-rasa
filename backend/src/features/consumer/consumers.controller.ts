import {
  Body,
  Get,
  HttpCode,
  JsonController,
  Param,
  Post,
  UseBefore,
} from "routing-controllers";
import Container from "typedi";
import { ConsumersService } from "./consumers.service";
import { OpenAPI } from "routing-controllers-openapi";
import { ValidationMiddleware } from "@/middlewares/validation.middleware";
import { CreateConsumerDto } from "./consumer.dto";
import { Envelope } from "@/types/envelope";
import { AppDataSource } from "@/data-source";
import { CartEntity } from "../orders/entities/cart.entity";
import { OrdersService } from "../orders/services/orders.service";

@JsonController()
export class ConsumersController {
  public consumer = Container.get(ConsumersService);
  public order = Container.get(OrdersService);

  @Post("/consumers")
  @HttpCode(201)
  @UseBefore(ValidationMiddleware(CreateConsumerDto))
  @OpenAPI({ summary: "Create a consumer" })
  public async createConsumer(@Body() consumerData: CreateConsumerDto) {
    return new Envelope(this.consumer.createConsumer(consumerData.userId));
  }

  @Get("/consumers/:consumerId/carts")
  @OpenAPI({ summary: "Get consumer's carts" })
  public async getCarts(@Param("consumerId") consumerId: number) {
    const carts = await AppDataSource.getRepository(CartEntity).find({
      where: { consumer: { id: consumerId } },
    });
    return new Envelope(carts);
  }

  @Post("/consumers/:consumerId/orders")
  @OpenAPI({ summary: "Create an order" })
  public async createOrder(@Param("consumerId") consumerId: number) {
    return new Envelope(await this.order.createOrder(consumerId));
  }
}
