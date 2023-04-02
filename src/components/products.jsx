import react from "react";
import Card from "./cards";
//
export default function Products(){
    //here we have basic padding margin for the first div ... we have two divs between on div
    return (<div style={{marginBottom:"100px"}}><div style={{backgroundColor:"#FC9930",padding:"50px" ,marginBottom:"100px"}}><h1 style={{Color:"black",textAlign:"center"}}>Wide Range of Products we offer !</h1>
          
           </div>
           
           <div class="container" style={{marginBottom:"100px"}}>
  
  <div class="row">
    <div class="col">
      <Card />
    </div>
    <div class="col">
      <Card />
    </div>
    <div class="col">
      <Card />
    </div>
    <div class="col">
      <Card />
    </div>
    
  </div>
</div>
<div style={{backgroundColor:"#FC9930",padding:"50px" ,marginBottom:"100px"}}><h1 style={{Color:"black",textAlign:"center"}}>Some Rated Products this week !</h1></div>
</div>
           
);
//here this is the container where we are using grids.
}