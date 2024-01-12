import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "product" })
export class ProductEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 128 })
  name: string;

  @Column({ length: 128 })
  humanName: string;

  @Column()
  price: number;

  @Column({ length: 128, nullable: true })
  desc?: string;

  @Column({ nullable: true })
  expireAt?: Date;
}
