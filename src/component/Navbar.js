import React from "react";
import reactLogo from "../logo512.png"; 


function Navbar() {
    return (
      <header className="head">
        <div className="nav">
          <div className="icon">
          <img src={reactLogo} alt="react logo" width="35px" />
          <h3 className="reactfact">ReactFacts</h3>
          </div>
         
          <div className="nav-item">
            <h4>React Course Project 1</h4>
          </div>
        </div>
      </header>
    );
  }
  
export default Navbar;