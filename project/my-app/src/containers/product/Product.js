import React , {Component} from 'react';
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import Productlist from '../../component/product/productlist';
import {withRouter} from "react-router-dom";
import {connect} from "react-redux"
import {productsFetch,productsDelete} from "../../actions"

class Product extends Component{
    
    constructor(props){
        super(props);
       
        this.delProduct = this.delProduct.bind(this);
        this.editProduct = this.editProduct.bind(this);
    }
    componentDidMount(){
        //ดึงข้อมูลจากdatabase จากproductAction
        this.props.productsFetch();
    }
    editProduct(product){
        this.props.history.push('products/edit/'+product.id);
    }
    delProduct(product){
      this.props.productsDelete(product.id);
    }

    render(){
        return(
            <div>
                <Header />
                <div className = "container-fluid">
                    <div className ="row">
                        <div className ="col-6"> 
                        <h1>สินค้า</h1>

                        </div>
                        <div className = "col-6">
                            <button className= "btn btn-success title float-right" onClick = {()=>this.props.history.push('product/add')}>เพิ่ม</button>
                        </div>
                    </div >         {/* //ส่งprop.productเข้าไป */}
                    <Productlist product ={this.props.products} 
                        ondelProduct={this.delProduct} 
                        onEditProduct={this.editProduct}/>
                </div>
                <Footer /> 
            </div>
        )
    }
   
}
function mapStateToProps(state) {
    return{products : state.products};    
}
export default withRouter(connect(mapStateToProps,{ productsFetch,productsDelete}) (Product));

