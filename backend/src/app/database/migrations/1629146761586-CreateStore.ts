import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateStore1629146761586 implements MigrationInterface {
  private tablename = "store";

  public async up(queryRunner: QueryRunner): Promise<void> {}

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
