import { Type } from "class-transformer";
import {
  ArrayMaxSize,
  ArrayMinSize,
  IsArray,
  IsEnum,
  ValidateNested,
} from "class-validator";

export class PointDto {
  @IsEnum(["Point"])
  type: "Point";

  @IsArray()
  @ArrayMinSize(2)
  @ArrayMaxSize(2)
  @ValidateNested({ each: true })
  @Type(() => Number)
  coordinates: number[];
}
