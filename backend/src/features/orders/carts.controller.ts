import { AppDataSource } from "@/data-source";
import { Envelope } from "@/types/envelope";
import {
  Body,
  Get,
  JsonController,
  Param,
  Put,
  UseBefore,
} from "routing-controllers";
import { OpenAPI } from "routing-controllers-openapi";
import { CartEntity } from "./entities/cart.entity";
import { ValidationMiddleware } from "@/middlewares/validation.middleware";
import { UpdateCartDto } from "./dtos/cart.dto";

@JsonController("/carts/:cartId")
export class CartsController {
  @Get()
  @OpenAPI({ summary: "Get cart" })
  public async getCart(@Param("cartId") cartId: number) {
    return new Envelope(
      await AppDataSource.getRepository(CartEntity).findOne({
        where: { id: cartId },
        relations: { order: { orderLines: true } },
      })
    );
  }

  @Put()
  @UseBefore(ValidationMiddleware(UpdateCartDto))
  @OpenAPI({ summary: "Update cart" })
  public async updateCart(
    @Param("cartId") cartId: number,
    @Body() cartData: UpdateCartDto
  ) {
    const cart = await AppDataSource.getRepository(CartEntity).findOne({
      where: { id: cartId },
    });
    cart.orderId = cartData.orderId;
    return new Envelope(
      await AppDataSource.getRepository(CartEntity).save(cart)
    );
  }
}
