import { ConsumerEntity } from "@/features/consumer/consumer.entity";
import { OrderEntity } from "@/features/orders/entities/order.entity";
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity({ name: "cart" })
export class CartEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  orderId: number;

  @OneToOne(() => OrderEntity)
  @JoinColumn()
  order: OrderEntity;

  @ManyToOne(() => ConsumerEntity, (consumer) => consumer.carts)
  consumer: ConsumerEntity;
}
