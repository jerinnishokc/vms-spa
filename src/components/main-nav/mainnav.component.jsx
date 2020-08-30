import React from 'react';
import {Link} from 'react-router-dom';
import './mainnav.styles.css';

class Navbar extends React.Component {
    render(){
        // console.log(this.props);
        return(
            this.props.page === 'HomePage' ? 
            <nav className="nav-bar">
                <div className="logo-container">
                <span><Link to="/">LOGO</Link></span>
                </div>
                <ul className="menu-container">
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
                <li>Login</li>
                </ul>
            </nav> 
            : 
            <nav className="nav-bar">
                <div className="logo-container">
                <span><Link to="/">LOGO</Link></span>
                </div>
                <ul className="menu-container">
                    <li>Login</li>
                </ul>
            </nav> 
        );
    }
}

export default Navbar;