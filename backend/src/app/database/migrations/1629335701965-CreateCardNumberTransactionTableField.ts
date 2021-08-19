import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class CreateCardNumberTransactionTableField1629335701965
  implements MigrationInterface
{
  private tablename = "transaction";
  private columnname = "card_number";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      this.tablename,
      new TableColumn({
        name: this.columnname,
        type: "varchar",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn(
      this.tablename,
      new TableColumn({
        name: this.columnname,
        type: "varchar",
      })
    );
  }
}
