import React , {Component} from 'react';
import Product from "./productitem";

class Productlist extends Component{
    showProduct(){
        // ดึงค่าจากproductitemเก็บข้อมูลไว้
         return this.props.product && this.props.product.map(product=>(
                <Product key={product.id} product = {product}  
                onAddOrder = {this.props.onAddOrder} //ส่งonAddOrderไปproductitem
                ondelProduct={this.props.ondelProduct} //ส่งondelProduct ไปproductitem
                onEditProduct={this.props.onEditProduct}/>
            ))
        
    }
    render(){
        return(
            <div className='row'>
                {this.showProduct()}
            </div>
        )
    }
}
export default Productlist;