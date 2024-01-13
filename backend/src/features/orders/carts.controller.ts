import { AppDataSource } from "@/data-source";
import { Envelope } from "@/types/envelope";
import { Get, JsonController, Param } from "routing-controllers";
import { OpenAPI } from "routing-controllers-openapi";
import { CartEntity } from "./entities/cart.entity";

@JsonController("/carts/:cartId")
export class CartsController {
  @Get()
  @OpenAPI({ summary: "Get cart" })
  public async getCart(@Param("cartId") cartId: number) {
    return new Envelope(
      await AppDataSource.getRepository(CartEntity).findOne({
        where: { id: cartId },
        relations: ["order"],
      })
    );
  }
}
