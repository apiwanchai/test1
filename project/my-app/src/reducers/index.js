import { combineReducers} from "redux";
import ProductReducer from "./ProductReducer";
import OrderReducer from "./OrderReducer";
//เก็บstate orders กับ product ในstore reducerคือfunction ที่รับactionเพื่อเปลี่ยนแปลงข้อมูลstateที่อยู่ในstore
const rootReducer =combineReducers({

    orders: OrderReducer, //รับactionเปลี่ยนแปลงค่า
    products: ProductReducer //รับactionเปลี่ยนแปลงค่า

})

export default rootReducer;