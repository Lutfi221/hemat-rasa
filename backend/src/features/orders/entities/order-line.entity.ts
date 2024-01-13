import { ProductEntity } from "@/features/inventories/entities/product.entity";
import {
  Column,
  Entity,
  ManyToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from "typeorm";
import { OrderEntity } from "./order.entity";

@Entity({ name: "order_line" })
export class OrderLineEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @PrimaryColumn()
  orderId: number;

  @ManyToOne(() => OrderEntity, (order) => order.orderLines)
  order: OrderEntity;

  @Column()
  productId: number;

  @ManyToOne(() => ProductEntity)
  product: ProductEntity;

  @Column()
  quantity: number;

  @Column()
  pricePerItem: number;
}
