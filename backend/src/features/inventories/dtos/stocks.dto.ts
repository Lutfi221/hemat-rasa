import { IsNumber, ValidateNested } from "class-validator";
import { CreateProductDto } from "./product.dto";

export class CreateStockDto {
  @ValidateNested()
  product: CreateProductDto;

  @IsNumber()
  quantity: number;
}

export class UpdateStockDto {
  @IsNumber()
  productId: number;

  @IsNumber()
  quantity: number;
}
