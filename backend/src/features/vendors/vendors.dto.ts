import { IsNumber } from "class-validator";

export class CreateVendorDto {
  @IsNumber()
  userId: number;
}
