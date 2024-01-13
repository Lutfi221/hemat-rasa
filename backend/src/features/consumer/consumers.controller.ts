import {
  Body,
  HttpCode,
  JsonController,
  Post,
  UseBefore,
} from "routing-controllers";
import Container from "typedi";
import { ConsumersService } from "./consumers.service";
import { OpenAPI } from "routing-controllers-openapi";
import { ValidationMiddleware } from "@/middlewares/validation.middleware";
import { CreateConsumerDto } from "./consumer.dto";
import { Envelope } from "@/types/envelope";

@JsonController()
export class ConsumersController {
  public consumer = Container.get(ConsumersService);

  @Post("/consumers")
  @HttpCode(201)
  @UseBefore(ValidationMiddleware(CreateConsumerDto))
  @OpenAPI({ description: "Create a consumer" })
  public async createConsumer(@Body() consumerData: CreateConsumerDto) {
    return new Envelope(this.consumer.createConsumer(consumerData.userId));
  }
}
