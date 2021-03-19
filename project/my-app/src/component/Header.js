import React, { Component } from 'react';
import {Link} from "react-router-dom";
import Productlist from './product/productlist';

class Header extends Component{

    constructor(props){
        super(props);
        this.state= {date : new Date()};
      
       
    }
  

    componentDidMount(){
        this.timerID = setInterval(() => this.tick(),1000);

    }

    componentDidUpdate(){
        
    }

    componentWillUnmount(){
      clearInterval(this.timerID);

    }


    tick(){
        this.setState({date : new Date()});
    }



 render(){
     const stype={height:40};
        return (
        <div className = "container-fluid">
            <div className = "row">
                <div className="col-md-8 text-left">
                    <h1 className="text-danger" >  <img src="./image/icon.png" style = {stype} alt=" "/>  Dota2 Item shop  </h1>
                </div>

            
                <div className = "col-md-4 text-right">
                    <h5 className = "text-muted mt-3">{this.state.date.toLocaleTimeString()}</h5>
                <ul className = "list-inline">
                    <li className = "list-inline-item title"><Link to="/"> หน้าหลัก</Link></li>
                    <li className = "list-inline-item title">|</li>
                    <li className = "list-inline-item title"><Link to="/order">รายการสั่งซื้อ</Link></li>
                    <li className = "list-inline-item title">|</li>
                    <li className = "list-inline-item title"><Link to="/products">สินค้า</Link></li>
                    <li className = "list-inline-item title">|</li>
                    <li className = "list-inline-item title"><Link to="/about">เกียวกับเรา</Link></li>
                    <li className = "list-inline-item title">|</li>
                    <li className = "list-inline-item title"><Link to="/test">ทดสอบ</Link></li>
                </ul>
                </div>
            </div>
            <hr/>
        </div>
            
            
            )
    }

}

export default Header;