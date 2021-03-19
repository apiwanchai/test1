import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class OrderService {
    constructor(
        @InjectModel('Orders') private orderTable: Model<any>
          
     ){
       console.log(this.orderTable)
     }
   
     
     async getdata() {
       return await this.orderTable.find();
     }
   
     createItem(){
      this.orderTable.create([{
        totalPrice:"1900",
    
      }])
     }
     async remove(id:any) {
      return await this.orderTable.remove({ id:id });
  }
  

}
