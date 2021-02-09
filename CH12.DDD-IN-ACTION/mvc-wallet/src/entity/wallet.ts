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
}
