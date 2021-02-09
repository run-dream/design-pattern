import { Provide } from '@midwayjs/decorator';
import { InjectEntityModel } from '@midwayjs/orm';
import { Wallet,} from '../entity/wallet';
import { WalletTransaction,TypeEnum,StatusEnum  } from '../entity/wallet_transaction';
import { Repository } from 'typeorm';

@Provide()
export class WalletService {
  @InjectEntityModel(Wallet)
  walletModel: Repository<Wallet>;

  @InjectEntityModel(WalletTransaction)
  walletTransactionModel: Repository<WalletTransaction>;

  async getWallet(walletId: number){
    return this.walletModel.findOne(walletId);
  }

  async getBalance(walletId: number){
    const wallet = await this.walletModel.findOne(walletId);
    if(!wallet){
      throw new Error('虚拟钱包不存在');
    }
    return wallet.amount;
  }

  async debit(walletId: number,amount: number){
    const wallet = await this.walletModel.findOne(walletId);
    if(!wallet){
      throw new Error('虚拟钱包不存在');
    }
    if(wallet.amount < amount){
      throw new Error('余额不足');
    }

    wallet.amount -= amount;
    await this.walletModel.save(wallet);
  }

  async credit(walletId: number, amount: number){
    const wallet = await this.walletModel.findOne(walletId);
    if(!wallet){
      throw new Error('虚拟钱包不存在');
    }
    wallet.amount += amount;
    await this.walletModel.save(wallet);
  }

  async transfer(fromWalletId: number,toWalletId: number, amount: number){
    const transaction = new WalletTransaction();
    transaction.amount = amount;
    transaction.createTime = new Date();
    transaction.fromWalletId = fromWalletId;
    transaction.toWalletId = toWalletId;
    transaction.type = TypeEnum.DECR;
    transaction.status = StatusEnum.TO_BE_EXCUTED;
    await this.walletTransactionModel.save(transaction);
    try{
      await this.debit(fromWalletId, amount);
      await this.credit(toWalletId, amount);
      transaction.status = StatusEnum.SUCCESSED;
    }catch(e){
      transaction.status = StatusEnum.FAILED;
    }
    await this.walletTransactionModel.save(transaction);
  }
}
