import { CommonEntity } from 'src/common/entity/common.entity';
import { Entity, Column } from 'typeorm';

@Entity()
export class User extends CommonEntity {
  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  name: string;

  @Column()
  phoneNumber: string;

  @Column()
  bizType: string;
}
