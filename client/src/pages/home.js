import React from "react";

import Nav from '../components/Nav';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Mags from '../assets/mags.png';
import Ash from '../assets/AshleyErffmeyer.jpeg';
import Maha from '../assets/maha.JPG';
import Jenny from '../assets/Jenny_photo.png'
import slideone from '../assets/care-caregiver-deal-45842.jpg';
import slidetwo from '../assets/woman-holding-flower.jpg';
import slidethree from '../assets/abuse-adult-anger-568021.jpg';
import babysitter from '../assets/adorable-baby-babysitter-1257110.jpg';
import friends from '../assets/friends.jpg';

import "./home.css";

function Home() {
    console.log(friends)
    return (
        <div>
            <div className="pimg1" style={{ backgroundImage: `url(${friends})` }}>

                <div className="hero">

                    <h1 className="mainheader">Maintain</h1>
                    <h3 className="caption1" id="cap">...your safety</h3>
                    <h3 className="caption2" id="cap">...your strategy</h3>
                    <h3 className="caption3" id="cap">...your health</h3>
                </div>


            </div>

            {/* <Header /> */}
            <div className="mainlayout">
                <div className="missionstatement">
                    {/* This is needed for the parralax */}
                    <h2>Our Mission</h2>
                    <p>Maintain is all about empowering survivors to maintain and take control of their life. We’re meant to be an all in one resource for individuals to:

                        <ul>

                            <li>Document daily life within our secure web journals. </li>
                            <li>Provide resources for help, assistance, and nearby places.</li>
                        </ul>

                        We value the safety and privacy of all our clients.
                        
                        No domestic violence victim should feel stuck in a poor quality of life.
                        </p>
                </div>
                <div className="pimg2" style={{ backgroundImage: `url(${babysitter})` }}>
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
                                <p>National Domestic Violence Hotline can help victims, survivors of domestic violence. Call 1-800-799-7233. Chat w/ an advocate on their website.</p>
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
                        <div className="row">



                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={Mags} />
                                <Card.Body>
                                    <Card.Title>Magdalene James</Card.Title>
                                    <Card.Text>
                                        Full-Stack Web developer with focus on Front-End UI/UX and mobile responsiveness.
                            </Card.Text>
                                    <Card.Link href="https://maggyjay.github.io/Bootstrap-Portfolio/">Portfolio</Card.Link>
                                </Card.Body>
                            </Card>
                            <br></br>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={Ash} />
                                <Card.Body>
                                    <Card.Title>Ashley Erffmeyer</Card.Title>
                                    <Card.Text>
                                        Full Stack web developer with a focus on back end tech & MongoDB.
                            </Card.Text>
                                    <Card.Link href="https://ashleyerffmeyer.github.io/">Portfolio</Card.Link>
                                </Card.Body>
                            </Card>
                            <br></br>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={Jenny} />
                                <Card.Body>
                                    <Card.Title>Jenny Vossman</Card.Title>
                                    <Card.Text>
                                        Full stack developer with a focus on Google Maps API integration and resources page UI.
                            </Card.Text>
                                    <Card.Link href="https://jenvoss17.github.io/jennifervossmanportfolio/">Portfolio</Card.Link>
                                </Card.Body>
                            </Card>
                        </div>
                        <br></br>
                        <div className="row">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={Maha} />
                                <Card.Body>
                                    <Card.Title>Maha Malampati</Card.Title>
                                    <Card.Text>
                                        Full Stack web developer focused on User Authentication.
                            </Card.Text>
                                    <Card.Link href="https://mahamalampati.github.io/Basic-Portfolio/">Portfolio</Card.Link>
                                </Card.Body>
                            </Card>
                            <br></br>
                            {/* <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={Mags} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                            </Card.Text>
                            <Card.Link href="#">Card Link</Card.Link>
                                </Card.Body>
                            </Card> */}
                        </div>
                    </div>

                </div>
            </div>

            <Footer />
        </div>
    );
}
export default Home;