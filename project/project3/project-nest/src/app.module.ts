import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { AppService } from './services/app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { memberSchema } from './schemas/member.schema';
import { AccountController } from './controllers/account.controller';
import { OrderModule } from './order/order.module';
// import * from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest'),
  MongooseModule.forFeature([
    { name: 'Member', schema: memberSchema }
    
  ]),
  OrderModule],
  
  controllers: [AppController,AccountController],
  providers: [AppService],
})
export class AppModule {}
