import React from "react";
import LoginButton from "../LoginButton";

import logo from "../../assets/maintainlogo.png";
import house from "../../assets/house.png";
import map from "../../assets/placeholder.png";
import user from "../../assets/user.png";
import menu from "../../assets/menu.png";

import "./style.css";

function Nav(props) {
    return (
        <div>
            <div className="navhead"></div>
            <div className="navbars">
                <a href="/"> <img className="MaintainTransLogo" src={logo} alt="Maintain Logo" /> </a>

                <div className="navigation">
                    <a className="active home" href="/"><img className="homeicon home" src={house} alt="maps" />Home</a>
                    <a className= "user" href="/journal"> <img className="usericon" src={user} alt="user"  />Profile</a>
                    <a className= "map" href="/map"> <img className="mapicon map" src={map} alt="resources" />Map</a>
                    <a className = "menu" href="/profile"> <img className="menuicon menu" src={menu} alt="menu" />Learn More</a>
                    <LoginButton auth={props.auth} />

                </div>
            </div>
        </div>
    );
}
export default Nav;
