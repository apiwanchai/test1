import React , {Component} from 'react';
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import {connect} from "react-redux"
import {ordersFetch,ordersDelete} from "../../actions"

class Order extends Component{
    constructor(props){
        super(props);
       
    }

    componentDidMount(){
       this.props.ordersFetch(); //ดึงข้อมูลแสดงOrders
    }

    delOrder(order){
        this.props.ordersDelete(order.id);//ลบOrders
    }
    showOders(){
        return this.props.orders &&  this.props.orders.map(order =>{ //เช็คว่าOrdersอยู่ในstateหรือ่ป่าว 
            const date = new Date(order.orderDate);
            return(
                <div key = {order.id} className =" col-md-3">
                    <hr/>
                    <p>
                    {/*                                                                     //ไปเรียกmethodเพื่อทำการลบ */}
                        <button className="btn btn-danger btn-sm title "onClick ={() => this.delOrder(order)}>X</button>
                    </p> 
                    <h5>วันที่ {date.toLocaleDateString()} {date.toLocaleTimeString()}</h5> {/* //แสดงวันที่ซื้อ */}
                    <ul>
                        {order.orders && order.orders.map(record => {  //เช็ดว่ามีorders ถ้ามีจะแสดงออกมา เก็บไว้ในrecord
                            return(
                                <li key= {record.product.id}>
                                    {record.product.productName} x {record.quantity} = {record.product.untiPrice*record.quantity}
                                </li>
                            )
                    }
                            )}
                    </ul>
                    <p className ="title">ยอดรวม{order.totalPrice}</p>
                </div>
            )
        })
    }

    render(){
        return(
            <div>
                <Header />
                    <div className ="container-fluid">
                        <h1>รายการสั่งซื้อ</h1>
                        <div className ="row"> 
                            {this.showOders()}
                        </div>

                    </div>
                <Footer />
            </div>
        )
    }
}
    function mapStateToProps(state) 
    {
        return {orders : state.orders}    
    }
export default connect(mapStateToProps,{ ordersFetch,ordersDelete}) (Order);