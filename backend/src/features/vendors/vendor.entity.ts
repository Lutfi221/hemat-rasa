import { UserEntity } from "@/features/users/user.entity";
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  Point,
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

  @Column({ nullable: true })
  name: string;

  @Column({ type: "geometry", nullable: true })
  location: Point;

  @Column({ nullable: true })
  address: string;

  @OneToMany(() => InventoryEntity, (inventory) => inventory.vendor)
  inventories: InventoryEntity[];
}
