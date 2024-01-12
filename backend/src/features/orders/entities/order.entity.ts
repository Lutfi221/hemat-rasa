import { Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { OrderLineEntity } from "./order-line.entity";

@Entity({ name: "order" })
export class OrderEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => OrderLineEntity, (orderLine) => orderLine.order)
  orderLines: OrderLineEntity[];
}
