import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateAppointments1632144205182 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'appointments',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'provider',
            type: 'varchar',
          },
          {
            name: 'date',
            type: 'timestamp with time zone', //Somente para DB postgres
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    //fallback do método up
    await queryRunner.dropTable('appointments');
  }
}

/**
 * Linha do tempo
 *
 * 1 semana - Agendamentos
 * 2 semana - Usuários
 * (NOVO DEV) - 3 Edição no Agendamentos
 * 4 semana - Compras
 *
 */
