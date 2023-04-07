import "../styles.css";
import TopBar from "./top";
import Products from "./products";
import Footer from "./footer";
import productData from "./data";
import ProductGlance from "./productPreview";

function divideHandler(item){
  return <ProductGlance
   local = {item.productPhoto}
   text = {item.productText}
   price = {item.productPrice}
   name= {item.productName}


  />
}

export default function App() {
  return <div>
  <TopBar />
  <Products />
  <div class="container" style={{ backgroundColor:"#CE5959"  ,position: "relative",
    top: 0, right: 0, bottom: 0, left: 0,
    }}>
  <div class="row" style={{margin:"0",width:"100%"}} >
  {productData.map(divideHandler)}
  </div>
  </div>
  <Footer />
  
  </div>
}
