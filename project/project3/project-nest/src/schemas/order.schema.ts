import {Schema} from 'mongoose'

export const orderSchema = new Schema({
    id: {
       type: Math,
       default: Math.floor(Math.random() * 100)

    },
    orderDate: {
        type : Date,
        default: Date.now()
        
    } ,
    totalPrice: String,

});

