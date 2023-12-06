import React from 'react';
import logo from '../../images/iub.png';
import './Navbar.css';

const Navbar = () => {
    return (
        <div>
            <nav className='navbar'>
                <a href="/home" className="logo-container">
                    <img src={logo} alt="" />
                    <p>Pre Advising Portal</p>
                </a>
                <div className='nav-container'>
                    <a href="/shop">View courses</a>
                    <a href="/orders">Select courses</a>
                    <a href="/inventory">Make plan</a>
                    <a href="/about">Add course</a>
                    <a href="/about">View capacity</a>
                    <a href="/about">Change capacity</a>
                </div>
                <button>Log In</button>
            </nav>
        </div>
    );
};

export default Navbar;