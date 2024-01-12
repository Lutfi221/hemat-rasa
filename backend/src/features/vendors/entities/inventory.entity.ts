import { Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { StockEntity } from "./stock.entity";

@Entity({ name: "inventory" })
export class InventoryEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => StockEntity, (stock) => stock.inventory)
  stocks: StockEntity[];
}
