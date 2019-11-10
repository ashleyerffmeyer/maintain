import React from "react";
import house from "../../assets/house.png"
import user from "../../assets/user.png";


function ProfileButton (props) {
    if (!props.auth) { return null }
  
    const {  isAuthenticated } = props.auth;
    return (
      isAuthenticated()
        ?<a className="user" href="/journal"> <img className="usericon" src={user} alt="user"  />Profile</a>
        :<a className="active home" href="/"><img className="homeicon home" src={house} alt="maps" />Home</a>
    )}
  
    export default ProfileButton