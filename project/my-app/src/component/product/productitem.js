import React , {Component} from 'react';
import Spinner from 'react-bootstrap/Spinner'
import axios from "axios";

class Productitem extends Component {
    constructor(props){
        super(props);
        this.state = {quantity:{},errors: {}, products: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this,"quantity");
        
    }
    
    componentDidMount(){
      axios.get("http://localhost:3001/product").then(res => {
        this.setState({products : res.data})
      })
     }
    handleValidation(){
        let fields = this.state.quantity;
        let errors = [];
        let formIsValid = true;


        if(!fields["quantity"]){
           formIsValid = false;
           errors["quantity"] = "ยังไม่ระบุจำนวน";
        }
        //typeof เช็คค่าเดิม
        if(typeof fields["quantity"] !== "undefined"){ 
           if(!fields["quantity"].match(/^[[1-9][0-9]{0,2}|1000+$/)){
              formIsValid = false;
              errors["quantity"] = "ระบุจำนวนเป็นตัวเลข";
           }        
        }
        this.setState({errors: errors});
        return formIsValid;
    }
    
    handleChange(field,event) {
        let fields = this.state.quantity;
        fields[field] = event.target.value;        
        this.setState({fields});
      }
    
      handleSubmit(event) {
        event.preventDefault();
        
        if(this.handleValidation()){
            
            console.log("ok")
        
            
         }else{
            console.log("not ok")
            this.setState({quantity : [] });
         }
         
      }
      state = {
        loading: false
      };
    
      fetchData = () => {
        this.props.onAddOrder(this.props.product);
        this.setState({ loading: true });
        setTimeout(() => {
          this.setState({ loading: false });
        }, 1000);
      };
     
    
    render(){
        const { loading } = this.state;
        const {productName,untiPrice,thumbnail}= this.props.product ;
        return (<div className= "col-mdu-3 col-sm-6" >
            <img className="img-fluid img-thumbnail" src={thumbnail} alt="ruryyyj"  />
            <h5 className="mt-2">{productName}</h5>
            <p className="title text-right">{untiPrice}THB</p>
            { this.props.onAddOrder &&    
                 //เช็ดว่ามีonAddordersจะแสดงปุ่มซื้อ                                              //เรียกใช้addOrdersแล้วส่งproductเข้าไป
            <button className="btn btn-block btn-secondary title"value ={untiPrice} disabled={loading} 
             onClick={()=> this.fetchData() }>{loading && (
                    <Spinner animation="border" variant="danger" />              )}
              {!loading && <span>Buy</span>}
            </button>
            }
             <hr/>
             { this.props.onAddOrder &&         //เช็ดว่ามีonAddordersจะแสดงปุ่มซื้อ                                                   //เรียกใช้addOrdersแล้วส่งproductเข้าไป
             <form onSubmit={this.handleSubmit}>
              <input type="number" size="30" placeholder="ระบุบจำนวน" onChange={this.handleChange} value={this.state.quantity["quantity"]}   />
              <br/>   
              <span style={{color: "red"}}>{this.state.errors["quantity"]}</span>
              <br/>    
             <input type="submit" value="Submit"  />
             
           </form>
            }
            {(this.props.ondelProduct || this.props.onEditProduct) &&//เช็ดว่ามีonEditจะแสดงปุ่มแก้ไช    
            <button className="btn btn-info col-5 title" onClick={()=> this.props.onEditProduct(this.props.product)}
            >Update</button>
            }
            { (this.props.ondelProduct || this.props.onEditProduct)&&//เช็ดว่ามีondelจะแสดงปุ่มลบ      
            <button className="btn  btn-danger col-5 float-right title"value ={untiPrice} onClick={()=> this.props.ondelProduct(this.props.product) }>
                Delete</button>
             }
            <hr/>
        </div>
        )
    }

}
export default Productitem;