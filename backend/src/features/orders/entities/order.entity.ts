import { Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { OrderLineEntity } from "./order-line.entity";
import { ConsumerEntity } from "@/features/consumer/consumer.entity";

@Entity({ name: "order" })
export class OrderEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => OrderLineEntity, (orderLine) => orderLine.order)
  orderLines: OrderLineEntity[];

  @ManyToOne(() => ConsumerEntity, (consumer) => consumer.orders)
  consumer: ConsumerEntity;
}
