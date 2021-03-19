import React , {Component} from 'react';
import Calulator from "./Calulator";
import Productlist from "../product/productlist";
import axios from "axios";
import {connect} from "react-redux"
import {productsFetch} from "../../actions"
//รวม Calulator กับ productlist มาไว้monitor
class Monitor extends Component{
  
    constructor(props){
        super(props);
        this.state = {totalPrice:0 , orders:[], confirm :false , msg: ''}; //เก็บยอดรวม และสินค้า
        this.addOrder = this.addOrder.bind(this); //เรียกthisของobjตัวเอง
        this.delOrder = this.delOrder.bind(this);//เรียกthisของobjตัวเอง
        this.cancelOrder = this.cancelOrder.bind(this);
        this.confirmOrder = this.confirmOrder.bind(this);
    }
    
    addOrder(product){
        let findOrder = this.state.orders.find(order => order.product.id ===  product.id) //หาสินค้าในorder.id
        if(findOrder){
            this.state.orders.push({product: product ,quantity:1});
        }else{
            this.state.orders.push({product: product ,quantity:1}); //ถ้าไม่เจอให้เพิ่มสินค้า
        }
        const totalPrice = this.state.totalPrice+parseInt(product.untiPrice); //เก็บยอดรวม unitprice ไว้ที่total
        this.setState({totalPrice: totalPrice , orders : this.state.orders, confirm :false});//ทำการเก็บข้อมูลของtotalpriceและordersทั้งหมดไว้ในstate 

    }
    delOrder(product){
        let findOrder = this.state.orders.find(order => order.product.id ===  product.id) //หาตัวที่ต้องการลบ
        let resultOders = this.state.orders.filter(order => order.product.id != product.id)//เอาตัวที่ยังไม่ต้องการาลบ
        const totalPrice = this.state.totalPrice  - (findOrder.quantity *parseInt(findOrder.product.untiPrice)); //คำนวนtotalpriceใหม่
        this.setState({totalPrice: totalPrice , orders : resultOders, confirm : false});//ทำการเก็บข้อมูลของtotalpriceและordersทั้งหมดไว้ในstate
    }
    confirmOrder(){
        const {totalPrice , orders} = this.state; //steteที่เเก็บTotal กับ Orders
        if(orders && orders.length >0 ){ //ถ้าOrdersมีlenght มากกว่า0 บันทึงลงในdatabase
        axios.post("http://localhost:3001/orders",{orderDate: new Date(), totalPrice ,orders})
        .then(res => {
        this.setState({totalPrice: 0 ,orders: [] , confirm: true , msg : 'บันทึกเรียนร้อย'});
    }) 
        }else{
        this.setState({totalPrice: 0 ,orders: [] , confirm: true , msg : 'เลือกสินค้าก่อน'});
        }

    }
    cancelOrder(){
        this.setState({totalPrice: 0 ,orders: [],confirm: false});

    }
    componentDidMount(){
        this.props.productsFetch(); //เรียกจากProductAction
     
       }

    render(){
        return(
            <div className = " container-fluid">
                {this.state.confirm&&
                <div className = "alert alert-secondary title text-right " role= "alert">
                    {this.state.msg}

                </div>
    }          {/*  //แบ่งหน้า แสดงproductกับCalulator */}
                <div className ="row">
                    <div className="col-md-9">
                        {/* //ส่งข้อมูลไปยังProductlist        //addOrder ทำการส่งmethodไปproductlist */}
                        <Productlist product={this.props.product}  onAddOrder={this.addOrder} />
                    </div>
                    <div className="col-md-3">
                        <Calulator totalPrice ={this.state.totalPrice} orders={this.state.orders} 
                        onDelOrder={this.delOrder} onconfirmOrder = {this.confirmOrder} oncancelOrder = {this.cancelOrder} />
                    </div>
                        
                </div>
            </div>
        )
    }

}
function mapStateToProps(state){//ส่งค่าStateที่อยุ่ในStoreมาให้
    return{ product : state.products} }
    
export default  connect(mapStateToProps,{productsFetch})(Monitor);//เชื่อมreactกับreaduct นำค่าในstoreมาใส่ในprop