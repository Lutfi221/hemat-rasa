import { Service } from "typedi";
import { InventoryEntity } from "./entities/inventory.entity";
import { AppDataSource } from "@/data-source";
import { CreateStockDto } from "./dtos/stocks.dto";
import { StockEntity } from "./entities/stock.entity";
import { ProductEntity } from "./entities/product.entity";

@Service()
export class InventoriesService {
  public async createInventory() {
    const inventory = new InventoryEntity();
    return AppDataSource.getRepository(InventoryEntity).save(inventory);
  }

  public async createStock(inventoryId: number, stockData: CreateStockDto) {
    const productData = stockData.product;
    const product = new ProductEntity();

    product.name = productData.name;
    product.humanName = productData.humanName;
    product.desc = productData.desc;
    product.price = productData.price;
    product.expireAt = productData.expireAt;

    let stockSaved: StockEntity;

    await AppDataSource.transaction(async (manager) => {
      const productSaved = await manager.save(product);

      const inventory = new InventoryEntity();
      inventory.id = inventoryId;

      const stock = new StockEntity();
      stock.product = productSaved;
      stock.quantity = stockData.quantity;
      stock.inventory = inventory;

      stockSaved = await manager.save(stock);
    });

    return stockSaved;
  }
}
