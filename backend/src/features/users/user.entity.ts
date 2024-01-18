import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { VendorEntity } from "../vendors/vendor.entity";
import { ConsumerEntity } from "../consumer/consumer.entity";

@Entity({ name: "user" })
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 64 })
  firstName: string;

  @Column({ length: 256 })
  lastName: string;

  @Column({ length: 32 })
  username: string;

  @Column()
  coins: number;

  @OneToOne(() => VendorEntity, (vendor) => vendor.user)
  vendor: VendorEntity;

  @OneToOne(() => ConsumerEntity, (consumer) => consumer.user)
  consumer: ConsumerEntity;
}
