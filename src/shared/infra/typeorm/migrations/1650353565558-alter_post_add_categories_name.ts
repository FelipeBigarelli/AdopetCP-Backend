import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class alterPostAddCategoriesName1650353565558
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'posts',
      new TableColumn({
        name: 'category_name',
        type: 'varchar',
      })
    );

    await queryRunner.createForeignKey(
      'posts',
      new TableForeignKey({
        name: 'PostsCategory',
        columnNames: ['category_name'],
        referencedColumnNames: ['category_name'],
        referencedTableName: 'categories',
        onDelete: 'CASCADE',
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('posts', 'PostsCategory');

    await queryRunner.dropColumn('posts', 'category_name');
  }
}
