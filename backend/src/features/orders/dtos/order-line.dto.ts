import { IsNumber } from "class-validator";

export class CreateOrderLineDto {
  @IsNumber()
  public productId: number;

  @IsNumber()
  public quantity: number;
}
