import { Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { StockEntity } from "./stock.entity";
import { VendorEntity } from "@/features/vendors/vendor.entity";

@Entity({ name: "inventory" })
export class InventoryEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => StockEntity, (stock) => stock.inventory)
  stocks: StockEntity[];

  @ManyToOne(() => VendorEntity, (vendor) => vendor.inventories)
  vendor: VendorEntity;
}
