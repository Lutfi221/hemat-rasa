import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { OrderLineEntity } from "./order-line.entity";
import { ConsumerEntity } from "@/features/consumer/consumer.entity";
import { ORDER_STATUSES, OrderStatus } from "../types";

@Entity({ name: "order" })
export class OrderEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "enum", enum: ORDER_STATUSES, default: ORDER_STATUSES[0] })
  status: OrderStatus;

  @OneToMany(() => OrderLineEntity, (orderLine) => orderLine.order)
  orderLines: OrderLineEntity[];

  @ManyToOne(() => ConsumerEntity, (consumer) => consumer.orders)
  consumer: ConsumerEntity;
}
