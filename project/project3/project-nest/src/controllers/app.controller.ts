import { Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { AppService } from '../services/app.service';

@Controller()
export class AppController {
  constructor(private appService: AppService) {}

  @Get('product')
  getHello(){
    return this.appService.getHello();
    }
  @Post()
  post():void{
    this.appService.createItem();
  }
  
  @Delete('product/:id')
  delete(@Param('id') id) {
    return this.appService.removeById(+id);
}

}
