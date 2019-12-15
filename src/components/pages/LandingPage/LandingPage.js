import adriana from '../../../img/Adriana.jpg';
import dan from '../../../img/Dan1.jpg';
import fernando from '../../../img/Fernando.jpg';
import React from 'react';
import react from '../../../img/logo-react.png';
import node from '../../../img/logo-node.png';
import mongo from '../../../img/logo-mongoDB.png';
import express from '../../../img/logo-express.png';
import Navbar from '../../organisms/Navbar/Navbar';
import('./LandingPage.css');

const LandingPage = (props) => {
    return (
        <div>
            <Navbar route={props.route} />
            <section className="landing-banner">
                <div className="d-flex flex-column">
                    <div>
                        <h1>
                            <a className="title first-title">Blotting</a>
                        </h1>
                        <h1 className="title second-title">
                            <a>Blockchain <br></br> + Betting</a>
                        </h1>
                    </div>
                </div>
            </section>

            <section className="landing-features">
            </section>

            <section className="landing-about-us">
                <div className="txt-center pt-5" id="about-us">
                    <div className="landing-titles txt-center">
                        <h2>
                            <a className="title2">About us</a>
                        </h2>
                    </div>
                    <div className="row align-items-center justify-content-around ml-5 mr-5 pl-5 pr-5">
                        <div data-aos="fade-up" data-aos-duration="1250" data-aos-easing="ease-in">
                            <img className="img-about-us" src={adriana} alt="about-us-img" href="" />
                            <h4 className="txt-center pt-2 txt-2">Adriana Saty Bertelli</h4>
                            <p className="txt-center landing-container txt-3">
                                After I got my graduation in Electrical Engineering at UFPR,
                                I was not satisfied due to not explore my logic and creativity.
                                So I decided to change my field to one of the most challenging areas to work on: IT!
                            </p>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1250" data-aos-easing="ease-in">
                            <img className="img-about-us" src={dan} alt="about-us-img" href="" />
                            <div className="">
                                <h4 className="txt-center pt-2 txt-2">Dan Yamashita</h4>
                                <p className="txt-center landing-container txt-3">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            </p>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1250" data-aos-easing="ease-in">
                            <img className="img-about-us" src={fernando} alt="about-us-img" href="" />
                            <div className="">
                                <h4 className="txt-center pt-2 txt-2">Fernando Yto</h4>
                                <p className="txt-center landing-container txt-3">
                                    I like baseball and snowboard. Currently not practicing any of it, but definitely should.
                                    Studied Business Administration, but work experiences always pushed me towards the dev world.
                                    So here I am!
                            </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="landing-about-project pt-1">
                <div className="txt-center">
                    <div className="txt-center landing-titles mt-5 mb-3">
                        <h2>
                            <a className="title2">About this project</a>
                        </h2>
                    </div>
                    <p>
                        This web application is our second project for Ironhack's Web Development Bootcamp. <br></br>
                        Built using NodeJs with Express framework, MongoDB as our database and Handlebars as the view engine. <br></br>
                        We also used some NPM packages to help us. Like: bcrypt, body-parser, chart.js, gulp, sass. <br></br>
                    </p>
                    <div className="d-flex row justify-content-around pt-5">
                        <div><img className="img-built-mongo" src={react} alt="express" href="" /></div>
                        <div><img className="img-built-mongo" src={node} alt="express" href="" /></div>
                        <div><img className="img-built-mongo" src={mongo} alt="mongodb" href="" /></div>
                        <div><img className="img-built-mongo" src={express} alt="express" href="" /></div>
                    </div>
                </div>
            </section>

        </div>

    );
}

export default LandingPage;
