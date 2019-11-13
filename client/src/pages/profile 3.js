import React from "react";
import LoginForm from "../components/LoginForm";
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import "./resources.css";

function Profile () {
    return (
        <div>
     <Nav />
    
        <LoginForm />
    
   <Footer />
   </div>
    );
}
export default Profile;