import { Service } from "typedi";
import { InventoryEntity } from "./entities/inventory.entity";
import { AppDataSource } from "@/data-source";
import { CreateStockDto, UpdateStockDto } from "./dtos/stocks.dto";
import { StockEntity } from "./entities/stock.entity";
import { ProductEntity } from "./entities/product.entity";
import { VendorEntity } from "../vendors/vendor.entity";

@Service()
export class InventoriesService {
  public async getInventories(vendorId: number) {
    return AppDataSource.getRepository(InventoryEntity).find({
      where: { vendor: { id: vendorId } },
    });
  }

  public async createInventory(vendorId: number) {
    const inventory = new InventoryEntity();
    inventory.vendor = new VendorEntity();
    inventory.vendor.id = vendorId;

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

  public async getStocks(inventoryId: number) {
    return AppDataSource.getRepository(StockEntity).find({
      where: { inventory: { id: inventoryId } },
      relations: ["product"],
    });
  }

  public async getStocksByVendor(vendorId: number) {
    return AppDataSource.getRepository(StockEntity).find({
      where: { inventory: { vendor: { id: vendorId } } },
      relations: ["product"],
    });
  }

  public async getStock(inventoryId: number, stockId: number) {
    return AppDataSource.getRepository(StockEntity).findOne({
      where: { inventory: { id: inventoryId }, id: stockId },
      relations: ["product"],
    });
  }

  public async updateStock(
    inventoryid: number,
    stockId: number,
    stockData: Partial<UpdateStockDto>
  ) {
    return AppDataSource.getRepository(StockEntity).save({
      inventory: { id: inventoryid },
      id: stockId,
      ...stockData,
    });
  }

  public async deleteStock(inventoryId: number, stockId: number) {
    return AppDataSource.getRepository(StockEntity).delete({
      inventory: { id: inventoryId },
      id: stockId,
    });
  }
}
