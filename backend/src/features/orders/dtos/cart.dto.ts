import { IsNumber } from "class-validator";

export class UpdateCartDto {
  @IsNumber()
  public orderId: number;
}
