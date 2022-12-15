import { SignUpRequestDto } from './../dto/signUpRequestDto';
import { User } from '../entity/users.entity';
import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Controller('users')
export class UsersController {
  @Post('login')
  @HttpCode(201)
  async login(@Body('name') name) {
    return name;
  }
}
