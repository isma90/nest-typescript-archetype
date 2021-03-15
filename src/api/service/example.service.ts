import { Injectable } from '@nestjs/common';
import { RedisService } from 'nestjs-redis';

@Injectable()
export class ExampleService {
  constructor(private readonly redisService: RedisService) {}

  async some() {
    const client = this.redisService.getClient('test1');
    const result = await client.set('KEY_SALUDO', 'Aloha');
    const msg = await client.get('KEY_SALUDO');
    return msg + '! ' + result;
  }
}
