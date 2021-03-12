import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { WINSTON_MODULE_NEST_PROVIDER, WinstonModule } from 'nest-winston';
import { LoggerConfig } from './app/factory';

async function bootstrap() {
  const logger: LoggerConfig = new LoggerConfig();
  const app = await NestFactory.create(AppModule, {
    logger: WinstonModule.createLogger(logger.console()),
  });
  app.useLogger(app.get(WINSTON_MODULE_NEST_PROVIDER));
  await app.listen(4000);
}

bootstrap();
