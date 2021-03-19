import { Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { OrderService } from './order.service';

@Controller()
export class OrderController {
    constructor(private readonly appService: OrderService) {}

    @Get('orders')
    getHello(){
      return this.appService.getdata();
      }
    @Post('orders')
    post():void{
      this.appService.createItem();
    }

    @Delete('orders/:id')
    remove(@Param('id') id) {
      console.log()
      return this.appService.remove(+id);
    }
  
}
