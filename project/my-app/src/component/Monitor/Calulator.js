import React , {Component} from 'react';

class Calulator extends Component {
showOrder(orders){
    //ถ้าไม่ออเดอรให้ขึ้น ไม่มีสินค้า
    if(!orders || orders.length === 0){
        return <li className="text-right text-muted title ">ไม่มีไอเทม</li>
    }else{
        return orders.map(order => {
                //สินค้า                          //จำนวนที่ซื้อ        //จำนวนสินค้าที่ซื้อราคาขาย
            return(
            <li className ="text-right text-success title">
                {order.product.productName} x {order.quantity} = {order.product.untiPrice*order.quantity}
                <button className =" btn btn-light btn-sm" onClick ={()=> this.props.onDelOrder(order.product)}> X </button>
               {/*  //เมื่อคลิกXไปลบordersproduct */}
            </li>
            )
        })
    }
}

    render(){
        const{totalPrice ,orders } = this.props ;
        return(
            <div>
                <h1 className="text-right">{totalPrice}</h1>
                <hr />
                <ul className="list-unstylpe">
                    {this.showOrder(orders)}
                </ul>
                <hr/>
                <button className =" btn btn-block btn-danger title" onClick = { () => this.props.onconfirmOrder()}>ยืนยัน</button>
                  {/*   //เรียกใช้Oncomfirm เพื่อนบันทึก */}
                <button  className =" btn btn-block btn-light title" onClick = { () => this.props.oncancelOrder()}>ยกเลิก</button>
                    {/* //เรียกใช้Oncancel เพื่อยกเลิก */}
            </div>
        )
    }
}
export default Calulator;