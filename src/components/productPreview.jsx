import React from "react";


export default function ProductGlance (props){
  
    // const i = props.rating;
    // function Stars(i){
    //     wh

    // }

    console.log(props.local);
    return(
        
                    <div class="card col-lg-3" style={{backgroundColor:"#CE5959",height: "50%",width: "25%",margin:"0px",borderRadius:"0",borderWidth:"0"}} >
            <img src="http://localhost:3000/cover.png" class="card-img-top newImage" />
            <div class="card-body">
            <h6>{props.name}</h6>
                <p class="card-text">{props.text}</p>
                <div class="curvedDiv">Price : {props.price}</div>
            </div>
            
            </div>
            
    );
}

