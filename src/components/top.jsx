import React from "react";
import MovingBanner from "./MovingBanner";
// here we exported and make function at one place
export default function TopBar() {
  // whole of this is copied from bootstrap and its the top bar of it.
  return (
    <div>
    
    <nav class="navbar navbar-expand-lg navbar-light bg-light " style={{backgroundColor:"#CE5959"}}>
    
      <div class="container-fluid" style={{backgroundColor:"#CE5959"}}>
        <a class="navbar-brand" href="#">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        
        <div class="collapse navbar-collapse" id="navbarNav">
        
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Features
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Pricing
              </a>
            </li>
            
          </ul>
          <div class="dropdown">
    <button class="dropbtn">Dropdown 
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
    </div>
  </div> 
  
          
         
        </div>
        <form class="form-inline my-2 my-lg-0" >
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"  style={{textAlign:"center",width:"600px"}}/>
      
    </form>
        
      </div>
      
    </nav>
    <MovingBanner />
    
    
  </div>
  );
}
