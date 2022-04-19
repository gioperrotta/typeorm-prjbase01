import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateClass1650294148409 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: "class",
              columns: [
                {
                  name: "id",
                  type: "uuid",
                  isPrimary: true,
                  generationStrategy: "uuid",
                },
                {
                  name: "name",
                  type: "varchar",
                },
                {
                  name: "duration",
                  type: "integer"
                },
                {
                  name: "created_at",
                  type: "timestamp",
                  default: "now()"
                },
                {
                  name: "updated_at",
                  type: "timestamp",
                  default: "now()"
                }
              ]
            })
          )
    }


    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("class")
    }

}
