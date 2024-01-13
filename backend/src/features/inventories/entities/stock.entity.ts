import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { ProductEntity } from "./product.entity";
import { InventoryEntity } from "./inventory.entity";

@Entity({ name: "stock" })
export class StockEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  productId: number;

  @OneToOne(() => ProductEntity)
  @JoinColumn()
  product: ProductEntity;

  @Column()
  quantity: number;

  @ManyToOne(() => InventoryEntity, (inventory) => inventory.stocks)
  inventory: InventoryEntity;
}
