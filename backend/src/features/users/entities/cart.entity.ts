import { OrderEntity } from "@/features/orders/entities/order.entity";
import { Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "cart" })
export class OrderLineEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => OrderEntity)
  @JoinColumn()
  order: OrderEntity;
}
