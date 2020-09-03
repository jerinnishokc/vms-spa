import React from 'react';
import {Link} from 'react-router-dom';
import './mainnav.styles.css';

class Navbar extends React.Component {
    navBarDecider(page) {
        switch (page) {
            case 'HomePage':
                return (<nav className="nav-bar">
                    <div className="logo-container">
                    <span><Link to="/">LOGO</Link></span>
                    </div>
                    <ul className="menu-container">
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><Link to="/login">Login</Link></li>
                    </ul>
                </nav>);
            case 'VendorPage':
                return (<nav className="nav-bar">
                    <div className="logo-container">
                    <span><Link to="/">LOGO</Link></span>
                    </div>
                    <ul className="menu-container">
                        <li><Link to="/login">Login</Link></li>
                    </ul>
                </nav>);
            case 'LoginPage':
              return (<nav className="nav-bar">
                    <div className="logo-container">
                    <span><Link to="/">LOGO</Link></span>
                    </div>                
                </nav>);
            default:
              break;
          }
    }

    render(){
        return (
            this.navBarDecider(this.props.page)
        );
    }
}

export default Navbar;
