import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Transaction } from "./Transaction";

@Entity()
export class Store {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ name: "store_name" })
  name: string;

  @Column({ name: "store_owner" })
  owner: string;

  @OneToMany((type) => Transaction, (store) => Store)
  transactions: Promise<Transaction[]>;
}
