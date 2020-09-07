import React from 'react';
import {Link} from 'react-router-dom';
import './mainnav.styles.css';
import alertify from 'alertifyjs';

class Navbar extends React.Component {
    constructor(props) {
        super(props);

        this.listener = null;
        this.state = {
            status: "top"
        };
    }

    componentDidMount() {
        this.listener = document.addEventListener("scroll", e => {
            var scrolled = document.scrollingElement.scrollTop;
            if (scrolled >= 650) {
            if (this.state.status !== "not-top") {
                this.setState({ status: "not-top" });
            }
            } else {
            if (this.state.status !== "top") {
                this.setState({ status: "top" });
            }
            }
        });
    }

    handleLogout = () => {
        alertify.confirm("Check", "Do you really want to logout?",
        () => {
            this.props.logout();
            
        },
        () => {
            alertify.error('Cancel');
        });
    };

    componentDidUpdate() {
        document.removeEventListener("scroll", this.listener);
    }

    navBarDecider = (page) => {
        switch (page) {
            case 'HomePage':
                return (
                <nav className="nav-bar" style={{
                    backgroundColor: this.state.status === "top" ? "rgba(250,250,250, 0.2)" : "#2F2FA2",
                }}>
                    <div className="logo-container">
                    <span><Link to="/">LOGO</Link></span>
                    </div>
                    <ul className="menu-container">
                        <li><a href="#landing">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#contact">Contact</a></li>
                        {
                            !this.props.user ? 
                            <li><Link to="/login">Login</Link></li>
                            :
                            <li><span onClick={this.handleLogout}>Logout-{this.props.user.name}</span></li>
                        }
                    </ul>
                </nav>);
            case 'VendorPage':
                return (
                <nav className="nav-bar invert">
                    <div className="logo-container">
                    <span><Link to="/">LOGO</Link></span>
                    </div>
                    <ul className="menu-container">
                    {
                        !this.props.user ? 
                        <li><Link to="/login">Login</Link></li>
                        :
                        <li><span onClick={this.handleLogout}>Logout-{this.props.user.name}</span></li>
                    }
                    </ul>
                </nav>);
            case 'LoginPage':
              return (
                <nav className="nav-bar invert">
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
