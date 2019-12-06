import React, { Component } from 'react';
import('./Navbar.css');
class Navbar extends Component {
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
                <ul>
                    <li><a className="title3 p-2" href="/logout">Logout</a></li>
                    <li><a className="title3" href="#features">Features</a></li>
                    <li><a className="title3" href="#about-us">About us</a></li>
                    <li><a className="title3" href="#about-project">About this project</a></li>
                    <li><a className="title3" href="/login">Login</a></li>
                    <li><a className="title3" href="/signup">Sign Up</a></li>
                </ul>
            </div>
        );
    }
}

export default Navbar;
