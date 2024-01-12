import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "vendor" })
export class VendorEntity {
  @PrimaryGeneratedColumn()
  id: number;
}
