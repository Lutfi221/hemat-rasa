import { IsEnum } from "class-validator";
import { ORDER_STATUSES, OrderStatus } from "../types";

export class UpdateOrderDto {
  @IsEnum(ORDER_STATUSES)
  public status: OrderStatus;
}
