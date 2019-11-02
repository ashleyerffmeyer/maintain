import React from "react";
import Nav from "../Nav";
import Header from "../Header"
import Footer from "../Footer";

function PageWrapper({ children }) {
    return (
        <div>
            <Nav />
            <Header />
            {children}
            <Footer />
        </div>
    );
}

export default PageWrapper;