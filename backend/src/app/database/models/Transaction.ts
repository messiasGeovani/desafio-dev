import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ name: "transaction_type" })
  type: string;

  @Column({ name: "transaction_date" })
  date: Date;

  @Column({ type: "real" })
  value: number;

  @Column()
  cpf: string;

  @Column({ name: "card_number" })
  cardNumber: string;

  @Column({ name: "transaction_hour" })
  hour: string;
}
