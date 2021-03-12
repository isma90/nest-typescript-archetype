import { Module } from '@nestjs/common';
import { AppService, ExampleService } from './app/service';
import { AppController, ExampleController } from './app/controller';
import { ConfigModule } from '@nestjs/config';
import { WinstonModule } from 'nest-winston';
import { LoggerConfig } from './app/factory';

const logger: LoggerConfig = new LoggerConfig();

@Module({
  imports: [ConfigModule.forRoot(), WinstonModule.forRoot(logger.console())],
  controllers: [AppController, ExampleController],
  providers: [AppService, ExampleService],
})
export class AppModule {}
