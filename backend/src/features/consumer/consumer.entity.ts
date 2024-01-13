import {
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { UserEntity } from "../users/user.entity";
import { CartEntity } from "../orders/entities/cart.entity";
import { OrderEntity } from "../orders/entities/order.entity";

@Entity({ name: "consumer" })
export class ConsumerEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => UserEntity)
  @JoinColumn()
  user: UserEntity;

  @OneToMany(() => CartEntity, (cart) => cart.consumer)
  carts: CartEntity[];

  @OneToMany(() => OrderEntity, (order) => order.consumer)
  orders: OrderEntity[];
}
