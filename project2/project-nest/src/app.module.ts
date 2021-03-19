import { Module } from '@nestjs/common';
// import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './controllers/app.controller';
import { AppService } from './services/app.service';


@Module({
  // imports: [MongooseModule.forRoot('mongodb://localhost:27017/nest')],
  // imports: [MongooseModule.forRoot('mongodb://localhost:27017',{
  //   connectionName:'member_db'
  // })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
