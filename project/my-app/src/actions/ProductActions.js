import axios from "axios";
import {PRODUCTS_FETCH} from "./types" 

export const productsFetch =()=>{ //ดึงค่าจากdatebase 

    return dispatch =>{
        axios.get("http://localhost:3001/product").then(
            res =>{
                dispatch({type : PRODUCTS_FETCH , payload : res.data}); 
            }
         )   
    }

}

export const productsDelete = id => { //ลบdatabase
    return dispatch => {
        axios.delete("http://localhost:3001/product/"+id ).then(
            res => { axios.get("http://localhost:3001/product").then(
                res => {
                    dispatch({type : PRODUCTS_FETCH , payload : res.data}); 
                }
            )  
         })
    }

}