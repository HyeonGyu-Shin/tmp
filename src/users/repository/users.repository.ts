import { SignUpRequestDto } from './../dto/signUpRequestDto';
import { User } from '../entity/users.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(User) private readonly usersRepository: Repository<User>,
  ) {}

  async create(userInfo: SignUpRequestDto) {
    await this.usersRepository.create(userInfo);
  }
}
