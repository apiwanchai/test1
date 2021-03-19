import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { orderSchema } from 'src/schemas/order.schema';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';

@Module({
  imports:[
    MongooseModule.forFeature([
      { name: 'Orders', schema: orderSchema }
      
    ]),
],
  controllers: [OrderController],
  providers: [OrderService]
})
export class OrderModule {}
