import { Provide, Config } from '@midwayjs/decorator';
import { DefaultApiAuthenticator } from '../lib/default_api_authenticator';
import { MysqlCrendentialStorage } from '../lib/mysql_crendential_storage';
@Provide()
export class ApiService {
  @Config('mysql')
  mysqlConfig;

  async auth(url: string): Promise<boolean> {
    const storage = new MysqlCrendentialStorage(
      this.mysqlConfig.host,
      this.mysqlConfig.database,
      this.mysqlConfig.user,
      this.mysqlConfig.password
    );
    const authenticator = new DefaultApiAuthenticator(storage);
    return authenticator.auth(url);
  }
}
