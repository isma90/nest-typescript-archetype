import { Body, Controller, Get, Inject, Post, Query } from '@nestjs/common';
import { ExampleService, SecondService } from '../service';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';

@Controller('example/v1')
export class ExampleController {
  private readonly message: string;

  constructor(
    private readonly exampleService: ExampleService,
    private readonly secondService: SecondService,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
  ) {
    this.message = 'aloha';
  }

  @Get('get-all')
  async getAll() {
    const exampleData = await this.exampleService.some();
    const otherData = await this.secondService.getOtherData();
    return {
      exampleData,
      otherData,
    };
  }

  @Get('params')
  query(@Query('v') v) {
    this.logger.debug(`INFO:  ${v}`);
    return v;
  }

  @Post('params')
  body(@Body() hola: any) {
    this.logger.debug(`INFO:  ${hola}`);
    return hola;
  }
}
