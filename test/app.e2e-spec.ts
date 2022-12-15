import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { AppModule } from './../src/app.module';
import { INestApplication } from '@nestjs/common';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  describe('User 모듈 e2e 테스트', () => {
    it('/users/login (Post)', () => {
      const req = { name: 'test' };
      return request(app.getHttpServer())
        .post('/users/login')
        .send(req)
        .expect(201)
        .expect(req.name);
    });
  });
});
