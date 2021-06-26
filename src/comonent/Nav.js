import React,{ useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
    const [show,handleShow] = useState(false);
// it is for nav backgroung. 
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY > 100){
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    },[])
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://assets.brand.microsites.netflix.io/assets/1561c76e-b389-11e7-9274-06c476b5c346_cm_800w.png?v=36"
        alt="Netflix Logo"
      />

      <img
        className="nav__avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="Netflix Avatar"
      />
    </div>
  );
}

export default Nav;
