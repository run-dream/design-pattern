import { EntityModel } from '@midwayjs/orm';
import {Column,PrimaryGeneratedColumn} from 'typeorm';

@EntityModel('wallet_transaction')
export class WalletTransaction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  createTime: Date;

  @Column()
  amount: number;

  @Column()
  type:number;

  @Column()
  status: number;

  @Column()
  fromWalletId: number;

  @Column()
  toWalletId: number;
}

export enum TypeEnum{
  INCR = 1,
  DECR
}

export enum StatusEnum{
  TO_BE_EXCUTED = 1,
  SUCCESSED,
  FAILED,
}
