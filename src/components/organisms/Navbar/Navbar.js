import React from 'react';
import { Link } from 'react-router-dom';
import('./Navbar.css');
const Navbar = ({ isUserAuthenticated }) => {
    return (
        <div className="d-flex justify-content-end">
            {isUserAuthenticated ? (
                <ul className="">
                    <li><a className="title3 p-2" href="/logout">Logout</a></li>
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
