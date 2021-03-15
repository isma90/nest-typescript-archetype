import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppService, ExampleService } from './app/api/service';
import { AppController, ExampleController } from './app/api/controller';
import { ConfigModule } from '@nestjs/config';
import { WinstonModule } from 'nest-winston';
import { LoggerConfig } from './app/api/factory';
import { LoggerMiddleware } from './app/api/middleware';

const logger: LoggerConfig = new LoggerConfig();

@Module({
  imports: [ConfigModule.forRoot(), WinstonModule.forRoot(logger.console())],
  controllers: [AppController, ExampleController],
  providers: [AppService, ExampleService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes(AppController, ExampleController);
  }
}
