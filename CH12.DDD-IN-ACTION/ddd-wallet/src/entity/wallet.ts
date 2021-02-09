import { EntityModel } from '@midwayjs/orm';
import {Column,PrimaryGeneratedColumn} from 'typeorm';

@EntityModel('wallet')
export class Wallet {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  createTime: Date;
  @Column()
  amount: number;
  @Column()
  updateTime: Date;

  getAmount():number{
    return this.amount;
  }

  debit(amount: number){
    if(this.amount < amount){
      throw new Error('余额不足');
    }
    this.amount -= amount;
  }

  credit(amount: number){
    if(amount < 0){
      throw new Error('金额不合法');
    }
    this.amount += amount;
  }
}
