import { Inject, Controller, Post,Get, Provide, Query } from '@midwayjs/decorator';
import { Context } from 'egg';
import { WalletService } from '../service/wallet';

@Provide()
@Controller('/wallet')
export class APIController {
  @Inject()
  ctx: Context;

  @Inject()
  walletService: WalletService;

  @Get('/get_wallet')
  async getWallet(@Query('walletId') walletId: number) {
    const wallet = await this.walletService.getWallet(walletId);
    return { success: true, message: 'OK', data: wallet };
  }


  @Get('/get_balance')
  async getBalance(@Query() walletId:number) {
    const balance = await this.walletService.getBalance(walletId);
    return { success: true, message: 'OK', data: balance };
  }

  @Post('/debit')
  async debit(@Query() walletId: number,@Query() amount: number) {
    await this.walletService.debit(walletId, amount);
    return { success: true, message: 'OK' };
  }

  @Post('/credit')
  async credit(@Query() walletId: number,@Query() amount: number) {
    await this.walletService.credit(walletId, amount);
    return { success: true, message: 'OK', };
  }


  @Post('/transfer')
  async transfer(@Query() fromWalletId: number,@Query() toWalletId, @Query() amount: number) {
    await this.walletService.transfer(fromWalletId,toWalletId, amount);
    return { success: true, message: 'OK', };
  }
}
