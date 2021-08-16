import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateStore1629146761586 implements MigrationInterface {
  private tablename = "store";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: this.tablename,
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            generationStrategy: "uuid",
            default: "uuid_generate_v4()",
          },
          {
            name: "store_name",
            type: "varchar",
            isUnique: true,
          },
          {
            name: "store_owner",
            type: "varchar",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
