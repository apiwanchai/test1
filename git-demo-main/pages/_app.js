import '../styles/globals.css'
import Nav from "../componetns/Nav";

function MyApp({ Component, pageProps }) {
  return (
    
      <div>
          <Nav/>
          <div className="index-content">
          <Component {...pageProps}/>
          </div>
         
      </div>
    
  )
}

export default MyApp
