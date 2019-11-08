import React from "react";
import LoginButton from "../LoginButton";

import logo from "../../assets/maintainlogo.png";
import house from "../../assets/house.png";
import document from "../../assets/document.png";
import user from "../../assets/user.png";
import menu from "../../assets/menu.png";
// import resources from "../../../src/pages/resources";

import "./style.css";

function Nav(props) {
    return (
        <div>
            <div className="navhead"></div>
            <div className="navbar">
                <a href="/"> <img className="MaintainTransLogo" src={logo} alt="Maintain Logo" /> </a>

                <div className="navigation">
                    {/* <a class="active" href="index.html"><img className="homeicon" src={house} alt="home"/> </a> */}
                    <a className="active" href="/map"><img className="homeicon" src={house} alt="maps" /> </a>
                    <a href="/journal"> <img className="usericon" src={user} alt="user"  /></a>
                    <a href="/recources"> <img className="resourceicon" src={document} alt="resources" /> </a>
                    <a href="/home"> <img className="menuicon" src={menu} alt="menu" /></a>
                    <LoginButton auth={props.auth} />
                </div>
            </div>
        </div>
    );
}
export default Nav;