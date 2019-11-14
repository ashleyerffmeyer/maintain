import React from "react";
import Header from "../components/Header"
import Footer from "../components/Footer";
import "./resources.css";

function Home() {
    return (
        <PageWrapper>
            <div className="container pt-3">
                <div className="Resources">
                    {/* This is needed for the parralax */}
                    <h2>Resources in my city:</h2>
                    <p>Lnunc pulvinar sapien et ligula. Nulla pellentesque dignissim enim sit amet venenatis. Amet justo
                        donec enim diam vulputate ut. Viverra nam libero justo laoreet sit amet cursus sit amet. Eget duis
                        at tellus at urna condimentum. Felis imperdiet proin fermentum leo vel orci porta. Vulputate mi sit
                        amet mauris. Fames ac turpis egestas integer eget aliquet. Faucibus interdum posuere lorem ipsum
                        dolor sit amet consectetur adipiscing. Vel turpis nunc eget lorem dolor sed. rna condimentum. Felis
                        imperdiet proin fermentum leo vel orci porta. Vulputate mi sit amet mauris. Fames ac turpis egestas
                        integer eget aliquet. Faucibus interdum posuere lorem ipsum dolor sit amet consectetur adipiscing.
                Vel turpis nunc eget lorem dolor sed. This is the end of this section. </p>
                </div>
                <div className="pimg2">
                    {/* This is needed for the parralax */}

                </div>

                <div className="slideshow p-3">
                    {/* This is needed for the parralax  */}
                    <h2>Information</h2>
                    <p>Lnunc pulvinar sapien et ligula. Nulla pellentesque dignissim enim sit amet venenatis. Amet justo
                donec enim diam vulputate ut. Viverra nam libero justo laoreet sit amet cursus sit amet. Eget duis. This is the end of this section. </p>
                </div>

            </div>
        </PageWrapper>
    );
}
export default resources;