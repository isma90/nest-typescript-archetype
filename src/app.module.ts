import { MiddlewareConsumer, Module, HttpModule } from '@nestjs/common';
import { AppService, ExampleService, SecondService } from './api/service';
import {
  AppController,
  ExampleController,
  SecondController,
} from './api/controller';
import { ConfigModule } from '@nestjs/config';
import { WinstonModule } from 'nest-winston';
import { LoggerConfig, RedisConfig } from './api/factory';
import { LoggerMiddleware } from './api/middleware';
import { RedisModule } from 'nestjs-redis';

const logger: LoggerConfig = new LoggerConfig();
const redisOptions: RedisConfig = new RedisConfig();

@Module({
  imports: [
    ConfigModule.forRoot(),
    WinstonModule.forRoot(logger.console()),
    RedisModule.register(redisOptions.getOptions()),
    HttpModule,
  ],
  controllers: [AppController, ExampleController, SecondController],
  providers: [AppService, ExampleService, SecondService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes(AppController, ExampleController);
  }
}
