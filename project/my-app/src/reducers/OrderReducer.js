import {ORDERS_FETCH} from "../actions/types" 

export default function (state = [] , action){
    switch (action.type){ //ทำการเช็คactionถ้าเป็นORDERS_FETCH เปลี่ยนแปลงค่าใหม่ในpayloqd
        case ORDERS_FETCH :
            return action.payload ; //returnเป็นค่าใหม่ที่ส่งมา
        default : //ถ้าไม่ใช้ให้กลับเป้นค่าเดิม
            return state;
    }

}