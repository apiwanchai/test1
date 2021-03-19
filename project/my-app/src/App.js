import './App.css';
import React , {Component} from 'react';
import {BrowserRouter, Route,Switch} from 'react-router-dom';
import Home from "./containers/Home" ;
import About from "./containers/About" ;
import Order from "./containers/order/Order" ;
import Products from "./containers/product/Product" ;
import NotFound from "./containers/error/NotFound";
import Test from "./containers/test" ;


class App extends Component {
 
  renderRouter(){
    return(
      <Switch>
        <Route exact path = "/" component ={Home}/>   
        <Route  exact path = "/About" component ={About}/>
        <Route  exact path = "/Order" component ={Order}/>
        <Route  exact path = "/Products" component ={Products}/>
        <Route  exact path = "/Test" component ={Test}/>

        <Route  component={NotFound} />;
       </Switch>
    )
  }
  
  render(){
    return (
     <BrowserRouter>{this.renderRouter()}</BrowserRouter>
    );
  }
  
}



export default App;
