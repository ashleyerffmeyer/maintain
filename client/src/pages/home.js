import React from "react";

import Header from '../components/Header';
import Footer from '../components/Footer';
import Carousel from 'react-bootstrap/Carousel'

import slideone from '../assets/care-caregiver-deal-45842.jpg'
import slidetwo from '../assets/woman-holding-flower.jpg'
import slidethree from '../assets/abuse-adult-anger-568021.jpg'

import "./home.css";



function Home() {
    return (

        <div>
            <Header />
            <div className="container pt-3">
                <div className="missionstatement">
                    {/* This is needed for the parralax */}
                    <h2>Our Mission</h2>
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
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={slideone}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>Resources</h3>
                                <p>Find local resources available in your area.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={slidetwo}
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <h3>Create Your Maintain Account</h3>
                                <p>Create a profile on Maintain.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={slidethree}
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <h3>National Domestic Hotline</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>

            </div>
            <Footer />
        </div>
    );
}
export default Home;
