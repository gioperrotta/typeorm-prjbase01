import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class TestClass1650660986221 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("class",
            new TableColumn(
                {
                    name: "desc",
                    type: "varchar",
                    isNullable: true
                }
            ))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("class", "desc")
    }
}
