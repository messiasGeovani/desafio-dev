import { EntityRepository, Repository } from "typeorm";
import { Transaction } from "../database/models/Transaction";

@EntityRepository(Transaction)
export class TransactionRepository extends Repository<Transaction> {}
