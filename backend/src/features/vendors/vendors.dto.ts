import { PointDto } from "@/dtos/points.dto";
import { IsNumber, IsString, ValidateNested } from "class-validator";

export class UpdateVendorDto {
  @IsString()
  name: string;

  @ValidateNested()
  location: PointDto;

  @IsString()
  address: string;
}

export class CreateVendorDto extends UpdateVendorDto {
  @IsNumber()
  userId: number;
}
