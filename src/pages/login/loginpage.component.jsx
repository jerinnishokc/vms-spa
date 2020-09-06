import React from 'react';
import Navbar from '../../components/main-nav/mainnav.component';
import './loginpage.styles.css';
import {login} from '../../data/auth.datastore';
import alertify from 'alertifyjs';
import {Link} from 'react-router-dom';

class LoginPage extends React.Component {
    state = {
        email: "",
        password: "",
        type: "-1"
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        try{
            // console.log('Form submitted', this.state);
            const userDetails = await login(this.state);
            userDetails ? alertify.success("Login succeeded") : alertify.error("Login failed");
            this.setState({
                email: "",
                password: "",
                type: "-1"
            });
        } catch(e) {
            console.log('Error occurred', e);
        }
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        });
    };

    render() {
        return (
            <div className="login-page-container">
                <div className="bg-image-layer-1">
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#2F2FA2" d="M31.2,-33.7C44.9,-33,63.5,-29.9,65.3,-21.8C67.1,-13.8,52,-0.9,39.8,5.6C27.6,12.1,18.3,12.3,12.2,10.3C6,8.3,3,4.3,-6.3,13C-15.6,21.7,-31.3,43.1,-46.6,48C-61.9,53,-76.9,41.4,-75.6,28.5C-74.3,15.7,-56.6,1.5,-48.8,-13.7C-40.9,-28.9,-42.7,-45.2,-36.2,-48.1C-29.7,-51.1,-14.9,-40.8,-3.1,-36.6C8.8,-32.4,17.5,-34.3,31.2,-33.7Z" transform="translate(100 100)" />
                    </svg>
                </div>
                <div className="login-form-container">
                    <Link to="/">LOGO</Link>
                    <form>
                        <input id="email" type="text" placeholder="email" name="email" value={this.state.email} onChange={this.handleChange}/>
                        <input id="password" type="password" placeholder="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                        {/*<input id="type" type="text" placeholder="type" name="type" value={this.state.type}/>*/}
                        <select id="type" name="type" value={this.state.type} onChange={this.handleChange}>
                            <option value="-1">Select one</option>
                            <option value="user">User</option>
                            <option value="vendor">Vendor</option>
                            <option value="Admin">Admin</option>
                        </select>
                        <button onClick={this.handleSubmit}>Login</button>                        
                    </form>
                </div>
            </div>
        );
    }
}

export default LoginPage;

/*<div className="bg-image-layer-1"></div>*/
// #FF0066