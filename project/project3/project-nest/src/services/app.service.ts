import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class AppService {
  constructor(
     @InjectModel('Member') private memberTable: Model<any>
       
  ){
    console.log(this.memberTable)
  }

  
  async getHello() {
    return await this.memberTable.find();
  }

  createItem(){
   this.memberTable.create([{
    id: "9",
    productName: "หัวsven",
    untiPrice: "800",
    thumbnail: "./image/head.png"

   }])
  }
  async removeById(id:any) {
    return await this.memberTable.remove({ id:id });
}
}
