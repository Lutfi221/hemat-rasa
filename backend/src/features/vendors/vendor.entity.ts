import { UserEntity } from "@/features/users/user.entity";
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { InventoryEntity } from "../inventories/entities/inventory.entity";

@Entity({ name: "vendor" })
export class VendorEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @OneToOne(() => UserEntity)
  @JoinColumn({ name: "user_id" })
  user: UserEntity;

  @Column()
  @OneToMany(() => InventoryEntity, (inventory) => inventory.vendor)
  inventories: InventoryEntity[];
}
