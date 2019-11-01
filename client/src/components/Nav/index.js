import React from "react";
import logo from "../../assets/maintainlogo.png";
import house from "../../assets/house.png";
import document from "../../assets/document.png";
import user from "../../assets/user.png";
import menu from "../../assets/menu.png";

import "./style.css";

function Nav () {
    return (
        <div>
        <div className="navhead"></div>
        <div className="navbar">
    
            <img className="MaintainTransLogo" src={logo} alt="Maintain Logo"/>
        
        <div className="navigation">
            <a class="active" href="index.html"><img className="homeicon" src={house} alt="home"/> </a>
            <a href="profile.html"> <img className="usericon" src={user}/></a>
            <a href="resources.html"> <img className="resourceicon" src= {document} alt="resources"/> </a>
            <a href="#"> <img className="menuicon" src={menu} alt="menu"/></a>
        </div>
    </div>
    </div>
    );
}
export default Nav;