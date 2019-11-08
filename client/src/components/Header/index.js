import React from "react";
import "./style.css";
import friends from "../../assets/friends.jpg";

function Header() {
    return (
        <div className="hero">
            <img className="friendsmainpic" src={friends} alt="Friends" />

            <h1 className="mainheader">Maintain</h1>
            <h3 className="caption1" id="cap">...your safety</h3>
            <h3 className="caption2" id="cap">...your strategy</h3>
            <h3 className="caption3" id="cap">...your health</h3>
        </div>

    );
}

export default Header;