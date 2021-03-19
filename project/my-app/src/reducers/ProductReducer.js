import {PRODUCTS_FETCH} from "../actions/types" 
//รับactionเพื่อนเปลี่ยนแปลงข้แมุลในState
export default function (state = [] , action){
    switch(action.type){
        case PRODUCTS_FETCH :
            return action.payload ;
        default :
            return state;
    }

}