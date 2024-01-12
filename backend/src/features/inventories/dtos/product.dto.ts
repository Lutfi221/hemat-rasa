import { IsDateString, IsNumber, IsString } from "class-validator";

export class CreateProductDto {
  @IsString()
  name: string;

  @IsString()
  humanName: string;

  @IsString()
  desc: string;

  @IsNumber()
  price: number;

  @IsDateString()
  expireAt: Date;
}
