import {
  Inject,
  Controller,
  Post,
  Provide,
  Query,
  Get,
} from '@midwayjs/decorator';
import { Context } from 'egg';
import { ApiService } from '../service/api';

@Provide()
@Controller('/api')
export class APIController {
  @Inject()
  ctx: Context;

  @Inject()
  apiService: ApiService;

  @Post('/auth')
  @Get('/auth')
  async auth(@Query() url: string): Promise<any> {
    const success = await this.apiService.auth(url);
    const message = success ? 'OK' : 'FAIL';
    return { success, message };
  }
}
