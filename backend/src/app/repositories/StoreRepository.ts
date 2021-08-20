import { EntityRepository, Repository } from "typeorm";
import { Store } from "../database/models/Store";

@EntityRepository(Store)
export class StoreRepository extends Repository<Store> {}
