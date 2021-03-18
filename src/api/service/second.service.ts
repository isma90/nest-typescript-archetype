/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-var-requires */
import { Injectable, HttpService } from '@nestjs/common';

@Injectable()
export class SecondService {
  constructor(
    private readonly httpService: HttpService,
    ) {}

  async getOtherData() {
    const { data}  = await this
      .httpService
      .get('http://localhost:8081/second/v1/get-other-data')
      .toPromise();
    return data;
  }

}
