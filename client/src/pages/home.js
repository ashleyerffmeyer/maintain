import React from "react";

import Header from '../components/Header';
import Footer from '../components/Footer';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Mags from '../assets/mags.png';
import Ash from '../assets/AshleyErffmeyer.jpeg'
import slideone from '../assets/care-caregiver-deal-45842.jpg';
import slidetwo from '../assets/woman-holding-flower.jpg';
import slidethree from '../assets/abuse-adult-anger-568021.jpg';

import "./home.css";



function Home() {
    return (

        <div>
            <Header />
            <div className="mainlayout">
                <div className="missionstatement">
                    {/* This is needed for the parralax */}
                    <h2>Our Mission</h2>
                    <p>Empowering survivors to maintain and take control of their life.<br></br>
                        >We value safety and privacy for each user.
                        >We allow users to document daily life within our secure web journals.
                        >We provide resources for help, assistance, and nearby places.
                        >No domestic violence victim should feel stuck in a poor quality of life.
                        </p>
                </div>
                <div className="pimg2">
                    {/* This is needed for the parralax */}
                    <div className="ptext">
                        <span className="border">
                            Further Information
                        </span>
                    </div>

                </div>

                <div className="slideshow">
                    {/* This is needed for the parralax  */}
                    <h2>Information</h2>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={slideone}
                                height={600}
                                width={350}
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
                                height={600}
                                width={350}
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
                                height={600}
                                width={350}
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <h3>National Domestic Hotline</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>

                <div className="pimg3">
                    {/* This is needed for the parralax */}

                    <div className="ptext">
                        <span className="border trans">
                            About Us
                        </span>
                    </div>

                </div>
                <div className="AboutUs">
                    <h2>Meet Us</h2>
                    <div className="container-fluid">
                        <div className= "row">
                        


                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={Mags} />
                        <Card.Body>
                            <Card.Title>Magdalene James</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    <br></br>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={Ash} />
                        <Card.Body>
                            <Card.Title>Ashley Erffmeyer</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    <br></br>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={Mags} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    </div>
                    <br></br>
                    <div className= "row">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={Mags} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    <br></br>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={Mags} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    </div>
                    </div>

                </div>
                </div>

            <Footer />
        </div>
    );
}
export default Home;