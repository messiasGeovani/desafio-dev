import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTransaction1629159178653 implements MigrationInterface {
  private tablename = "transaction";

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
            name: "transaction_type",
            type: "varchar",
          },
          {
            name: "transaction_date",
            type: "date",
          },
          {
            name: "value",
            type: "real",
          },
          {
            name: "cpf",
            type: "varchar",
          },
          {
            name: "transaction_hour",
            type: "varchar",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
