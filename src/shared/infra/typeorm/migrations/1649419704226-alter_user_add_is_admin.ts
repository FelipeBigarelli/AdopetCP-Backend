import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class alterUserAddIsAdmin1649419704226 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'users',
      new TableColumn({
        name: 'is_admin',
        type: 'boolean',
        default: false,
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('users', 'isAdmin');
  }
}
