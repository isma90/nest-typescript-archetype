import { Controller, Get, Inject } from '@nestjs/common';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';

@Controller('second/v1')
export class SecondController {
  constructor(
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
  ) {}

  @Get('get-other-data')
  async getOtherData(): Promise<otherData[]> {
    const data = [
      {
        id: 1,
        value: 'A',
      },
      {
        id: 2,
        value: 'B',
      },
      {
        id: 3,
        value: 'C',
      },
      {
        id: 4,
        value: 'D',
      },
    ];
    return data;
  }
}

interface otherData {
  id: number;
  value: string;
}
