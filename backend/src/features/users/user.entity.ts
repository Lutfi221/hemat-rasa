import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
}
