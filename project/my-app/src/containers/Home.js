import '../App.css';
import React , {Component} from 'react';
import Monitors from "../component/Monitor/Monitor";
import Header from "../component/Header";
import Footer from "../component/Footer";
import {connect} from "react-redux"
import {productsFetch} from "../actions"


class Home extends Component {
  constructor(props){
    super(props);
    
  }
 
  render(){
    return (
      <div >
      <Header/>
      <Monitors/> {/* // ส่งข้อมูลproduct ไปยังmonitor*/}
      <Footer company ="Nexss" email ="Nex@gmail.com"/>
      </div>
    );
  }
  
}



export default Home; //เชื่อมreactกับreaduct นำค่าในstoreมาใส่ในprop
