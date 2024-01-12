import { IsNumber, ValidateNested } from "class-validator";
import { CreateProductDto } from "./product.dto";

export class CreateStockDto {
  @ValidateNested()
  product: CreateProductDto;

  @IsNumber()
  quantity: number;
}
