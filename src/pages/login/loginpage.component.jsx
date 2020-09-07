import React from 'react';
import './loginpage.styles.css';
import {login, kickStartAutoLogout} from '../../data/auth.datastore';
import {storeInLocalStorage} from '../../data/utility';
import alertify from 'alertifyjs';
import {Link} from 'react-router-dom';
import CustomButton from '../../components/custom-button/customButton.component';
import {withRouter} from 'react-router-dom';
import WithSpinner from '../../components/with-spinnner/withSpinner.component';

class LoginPage extends React.Component {
    state = {
        email: "",
        password: "",
        type: "-1",
        isLoading: false
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        
        try{
            // console.log('Form submitted', this.state);
            this.setState({isLoading: true});
            const {valid, response} = this.validateInputs();
            if(valid === true) {
                const userDetails = await login(this.state);
                userDetails ? alertify.success("Login succeeded") : alertify.error("Login failed");
                this.resetForm();
                storeInLocalStorage("user", JSON.stringify(userDetails));
                this.props.loggedIn(userDetails);                
                kickStartAutoLogout(userDetails.tokenExpirationDate,this.logout);
                this.props.history.push('/');
            } else {
                alertify.error(response);
                this.resetForm();
            }
        } catch(e) {
            console.log('Error occurred', e);
        }
    };

    logout = () => {
        this.props.logout();
    }

    resetForm() {
        this.setState({
            email: "",
            password: "",
            type: "-1",
            isLoading: false
        });
    }

    validateInputs() {
        let valid = true;
        let response = '';

        if(!this.state.email) {
            valid = false;
            response = 'Email cannot be empty';
            return {valid, response};
        }

        return {valid, response};
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        });
    };

    handleSignUp = (e) => {
        e.preventDefault();
        console.log('Go to sign up page', this.props);
    };

    render() {
        // console.log('Props check:', this.props);
        return (
            <div className="login-page-container">
                {
                    this.state.isLoading ? <WithSpinner /> : null
                }
                
                <div className="bg-image-layer-1">
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#2F2FA2" d="M31.2,-33.7C44.9,-33,63.5,-29.9,65.3,-21.8C67.1,-13.8,52,-0.9,39.8,5.6C27.6,12.1,18.3,12.3,12.2,10.3C6,8.3,3,4.3,-6.3,13C-15.6,21.7,-31.3,43.1,-46.6,48C-61.9,53,-76.9,41.4,-75.6,28.5C-74.3,15.7,-56.6,1.5,-48.8,-13.7C-40.9,-28.9,-42.7,-45.2,-36.2,-48.1C-29.7,-51.1,-14.9,-40.8,-3.1,-36.6C8.8,-32.4,17.5,-34.3,31.2,-33.7Z" transform="translate(100 100)" />
                    </svg>
                </div>
                <div className="login-form-container">
                    <div className="logo-container">
                        <Link to="/">LOGO</Link>
                    </div>
                    <div className="login-form-element-container">
                        <form>
                            <input id="email" type="email" placeholder="email" name="email" value={this.state.email} onChange={this.handleChange} required/>
                            <input id="password" type="password" minLength="8" placeholder="password" name="password" value={this.state.password} onChange={this.handleChange} required/>
                            {/*<input id="type" type="text" placeholder="type" name="type" value={this.state.type}/>*/}
                            <select id="type" name="type" value={this.state.type} onChange={this.handleChange} required>
                                <option value="-1">Select one</option>
                                <option value="user">User</option>
                                <option value="vendor">Vendor</option>
                                <option value="Admin">Admin</option>
                            </select>
                            <div className="login-button-container">
                                <CustomButton onClick={this.handleSubmit} type="login">Login</CustomButton>                        
                                <CustomButton onClick={this.handleSignUp} type="login">SignUp</CustomButton>                        
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(LoginPage);

/*<div className="bg-image-layer-1"></div>*/
// #FF0066