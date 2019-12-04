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

               
                <div className="txt-center" id="about-us">
                    <div className="landing-titles txt-center">
                        <h2>About us</h2>
                    </div>
                    <div className="row align-items-center justify-content-around landing-text">
                        <div data-aos="fade-up" data-aos-duration="1250" data-aos-easing="ease-in" className="card">
                            <img className="img-about-us" src="../../../img/Adriana.jpg" alt="about-us-img" href="" />
                            <div className="card-body">
                                <h4 className="card-title txt-center">Adriana Saty Bertelli</h4>
                                <p className="card-text txt-center">
                                    After I got my graduation in Electrical Engineering at UFPR,
                                    I was not satisfied due to not explore my logic and creativity.
                                    So I decided to change my field to one of the most challenging areas to work on: IT!
                            </p>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1250" data-aos-easing="ease-in" className="card">
                            <img className="img-about-us" src="../../../Fernando.jpg" alt="about-us-img" href="" />
                            <div className="card-body">
                                <h4 className="card-title txt-center">Dan Yamashita</h4>
                                <p className="card-text txt-center">
                                    blbalbalballbablbalbalballbablbalbalballbablbalbalballba
                                    blbalbalballba
                            </p>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1250" data-aos-easing="ease-in" className="card">
                            <img className="img-about-us" src="../../../img/Fernando.jpg" alt="about-us-img" href="" />
                            <div className="card-body">
                                <h4 className="card-title txt-center">Fernando Yto</h4>
                                <p className="card-text txt-center">
                                    I like baseball and snowboard. Currently not practicing any of it, but definitely should.
                                    Studied Business Administration, but work experiences always pushed me towards the dev world.
                                    So here I am!
                            </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="txt-center mt-5" id="about-project">
                    <div className="txt-center landing-titles">
                        <h2>About this project</h2>
                    </div>
                    <p>
                        This web application is our second project for Ironhack's Web Development Bootcamp.
                        Built using NodeJs with Express framework, MongoDB as our database and Handlebars as the view engine.
                        We also used some NPM packages to help us. Like: bcrypt, body-parser, chart.js, gulp, sass.
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
