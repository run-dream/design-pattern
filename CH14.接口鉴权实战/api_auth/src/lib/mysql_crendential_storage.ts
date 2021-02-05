import { CredentialStorage } from './credential_storage';
import { createConnection, RowDataPacket } from 'mysql2/promise';

export class MysqlCrendentialStorage implements CredentialStorage {
  readonly host: string;
  readonly database: string;
  readonly user: string;
  readonly password: string;
  constructor(host: string, database: string, user: string, password: string) {
    this.host = host;
    this.database = database;
    this.user = user;
    this.password = password;
  }

  async getPasswordByAppId(appId: string): Promise<string> {
    const connection = await createConnection({
      host: this.host,
      user: this.user,
      password: this.password,
      database: this.database,
    });
    const [
      rows,
    ] = await connection.execute(
      'select password from tbl_api_auth where app_id = ?',
      [appId]
    );
    if (!(rows as RowDataPacket[]).length) {
      throw new Error(`appId ${appId} 未注册`);
    }
    const row = rows[0] as RowDataPacket;
    return row['token'] as string;
  }
}
