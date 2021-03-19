import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from '../services/app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Post('test')
  getHello1(): string {
    return 'Hello ';
  }
  
  @Post()
  root(): object{
    return{
      status:200,
      message: "successfull"
    }

  }

}