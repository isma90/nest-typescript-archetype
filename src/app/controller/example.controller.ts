import { Controller, Get, Inject, Req } from '@nestjs/common';
import { Request } from 'express';
import { ExampleService } from '../service';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';

@Controller('example/v1')
export class ExampleController {
  private readonly message: string;

  constructor(
    private readonly exampleService: ExampleService,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
  ) {
    this.message = 'aloha';
  }

  @Get('get-all')
  getAll() {
    return this.message;
  }

  @Get('params')
  params(@Req() request: Request) {
    this.logger.debug('INFO: ' + request);
    return '';
  }
}
