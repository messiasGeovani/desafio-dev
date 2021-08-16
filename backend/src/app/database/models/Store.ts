import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Store {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ name: "store_name" })
  name: string;

  @Column({ name: "store_owner" })
  owner: string;
}
