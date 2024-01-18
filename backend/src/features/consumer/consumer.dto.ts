import { PointDto } from "@/dtos/points.dto";
import { IsNumber, IsString, ValidateNested } from "class-validator";

export class CreateConsumerDto {
  @IsNumber()
  userId: number;

  @ValidateNested()
  location: PointDto;

  @IsString()
  address: string;
}
