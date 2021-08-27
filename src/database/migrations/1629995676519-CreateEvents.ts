import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateEvents1629995676519 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"events",
                columns:[
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                      },
                      {
                        name: "created_by",
                        type: "uuid",
                      },
                      {
                        name: "description",
                        type: "varchar",
                      },
                      {
                        name: "start_time",
                        type: "varchar",
                      },
                      {
                        name: "end_time",
                        type: "varchar",
                      },                      
                      {
                        name: "start_date",
                        type: "varchar",
                      },
                      {
                        name: "end_date",
                        type: "varchar",
                      },
                      {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                      },
                      {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()",
                      },
                ]

            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("events");
    }

}
