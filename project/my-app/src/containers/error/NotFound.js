import React  from 'react';
import Header from "../../component/Header";
import Footer from "../../component/Footer";

const NotFound =()=>{
    return (
     
        <div>
            <Header />
            <div className="contianer col-md-8 text-center">
                <h1 className="mt-5  " style={{fontSize : 120}}>404</h1>
                <h2 className ="title mb-4">Not Found</h2>
                <p className = "title mb-5">อย่ามั่ว อย่าเอ๋อ ไม่มีหน้านี้</p>

            </div>
            <Footer />
        </div>
    )
}
export default NotFound;