import adriana from '../../../img/Adriana.jpg';
import dan from '../../../img/Dan1.jpg';
import fernando from '../../../img/Fernando.jpg';
import React, { Component } from 'react';
import('./LadingPage.css');
class LadingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const name = target.name;
        let value;


        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        console.log(this.state)
        return (
            <div>
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

               
                <div className="txt-center pt-4" id="about-us">
                    <div className="landing-titles txt-center">
                        <h2>
                            <a className="title2">About us</a>
                        </h2>
                    </div>
                    <div className="row align-items-center justify-content-center landing-text">
                        <div data-aos="fade-up" data-aos-duration="1250" data-aos-easing="ease-in">
                            <img className="img-about-us" src={adriana} alt="about-us-img" href="" />
                         
                                <h4 className="txt-center">Adriana Saty Bertelli</h4>
                                <p className="txt-center">
                                    After I got my graduation in Electrical Engineering at UFPR, <br></br>
                                    I was not satisfied due to not explore my logic and creativity. <br></br>
                                    So I decided to change my field to one of the most challenging areas to work on: IT!
                            </p>
                       
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1250" data-aos-easing="ease-in">
                            <img className="img-about-us" src={dan} alt="about-us-img" href="" />
                            <div className="">
                                <h4 className="txt-center">Dan Yamashita</h4>
                                <p className="txt-center">
                                    blbalbalballbablbalbalballbablbalbalballbablbalbalballba <br></br>
                                    blbalbalballbablbalbalballbablbalbalballbablbalbalballba <br></br>
                                    blbalbalballba
                            </p>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1250" data-aos-easing="ease-in">
                            <img className="img-about-us" src={fernando} alt="about-us-img" href="" />
                            <div className="">
                                <h4 className="txt-center">Fernando Yto</h4>
                                <p className="txt-center">
                                    I like baseball and snowboard. Currently not practicing any of it, but definitely should. <br></br>
                                    Studied Business Administration, but work experiences always pushed me towards the dev world.<br></br>
                                    So here I am!
                            </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="txt-center mt-5" id="about-project">
                    <div className="txt-center landing-titles">
                        <h2> 
                            <a className="title2">About this project</a>
                        </h2>
                    </div>
                    <p>
                        This web application is our second project for Ironhack's Web Development Bootcamp. <br></br>
                        Built using NodeJs with Express framework, MongoDB as our database and Handlebars as the view engine. <br></br>
                        We also used some NPM packages to help us. Like: bcrypt, body-parser, chart.js, gulp, sass. <br></br>
                </p>
                    <div className="d-flex row justify-content-between">
                        <div><img className="img-built-mongo" src="/img/logo-node.png" alt="express" href="" /></div>
                        <div><img className="img-built-mongo" src="/img//logo-mongoDB.png" alt="mongodb" href="" /></div>
                        <div><img className="img-built-mongo" src="/img/logo-express.png" alt="express" href="" /></div>
                        <div><img className="img-built-mongo" src="/img/logo-handlebars.png" alt="hbs" href="" /></div>
                    </div>
                </div>
            </div>

        );
    }
}

export default LadingPage;
