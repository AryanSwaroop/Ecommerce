import React from "react";


export default function MovingBanner () {
    return(
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={require("./1.jpg")} height={"500px"} width={"100%"} />
    </div>
    <div class="carousel-item">
    <img src={require("./2.jpg")} height={"500px"} width={"100%"}/>
    </div>
    <div class="carousel-item">
    <img src={require("./3.jpg")} height={"500px"} width={"100%"}/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    );
}
//here i copied the carousel from bootstrap and used it here to make a moving banner that moves in every 6 seconds.
