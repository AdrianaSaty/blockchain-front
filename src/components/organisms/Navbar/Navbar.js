import React from 'react';
import { Link } from 'react-router-dom';
import('./Navbar.css');
const Navbar = ({ route, logout }) => {
    const onClickFuncs = (event) => {
        logout();
        event.preventDefault();
    }
    return (
        <div className="d-flex justify-content-end">
            {route === 'home' ? (
                <ul className="">
                    <li><a className="title3 p-2" href='/' >Wallet and Bets</a></li>
                    <li><a className="title3 p-2" onClick={(event) => onClickFuncs(event)} href='/' >Logout</a></li>
                </ul>
                ) : (
                <ul className="">
                    <li><Link className="title3" to="/login">Login</Link></li>
                    <li><a className="title3" href="/signup">Sign Up</a></li>
                </ul>
                )
            }
        </div>
    );
}

export default Navbar;
