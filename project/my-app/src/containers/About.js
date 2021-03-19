import React,{useState}  from 'react';
import Header from "../component/Header";
import Footer from "../component/Footer";

const About =( )=> {
    const [count, setCount] = useState(0)

    return (
        <div>
            <Header/>
            <div className = "container col-md-5">
                <h1>สวัสดีครับ</h1>
                <p className ="title text-justify mt-4 mb-4">
                    ขายเหมือนแจกฟรี
                </p>
                <h4 className = "text-success">จาก Dota2 Shop </h4>
            </div>
            <Footer company = "Nex" email="Nexss@gmail.com"/>
            <p>You click {count} times</p>
        <button
          style={{
            padding: '8px 16px',
            borderRadius: 4,
            fontSize: '1.25rem'
          }}
          onClick={() => setCount(count + 1)}
        >
          Click me
        </button>
  
        </div>
        
    )
}
export default About;