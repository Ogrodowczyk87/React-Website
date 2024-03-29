import React from "react";
import './Navbar.css'
import logo from '../assets/logo.png'

const Navbar = () => {
    return <div>
        <nav>
            <img src={logo} alt="" />
            <ul>
                <li>Home</li>
                <li>Program</li>
                <li>About US</li>
                <li>Campus</li>
                <li>Testimonials</li>
                <li>Contact us</li>
            </ul>
        </nav>
    </div>;
};

export default Navbar;
