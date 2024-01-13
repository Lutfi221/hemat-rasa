import { IsNumber } from "class-validator";

export class CreateConsumerDto {
  @IsNumber()
  userId: number;
}
