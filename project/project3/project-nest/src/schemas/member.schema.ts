import {Schema} from 'mongoose'

export const memberSchema = new Schema({
    id: String,
    productName: String,
    untiPrice : String,
    thumbnail: String
 
});

