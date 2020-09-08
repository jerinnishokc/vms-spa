import React from 'react';
import './userBox.styles.css';

class UserBox extends React.Component {
    state = {
        dropdownOpen: false
    };

    toggleDropDown = () => {
        this.setState(state => ({
            dropdownOpen: !state.dropdownOpen
        }));
    };
    render() {
        return (
            <div className={`user-box-container ${this.props.page !== 'HomePage' ? 'black-nav-font-styles' : ''}`} >
                Signed in as {this.props.user.name}
                <div onClick={this.toggleDropDown} className="user-box-image-container">
                    <i className="fa fa-user-circle"></i>
                </div>
                {this.state.dropdownOpen ? 
                    <ul className="user-box-dropdown-container">
                        <li>{this.props.user.type}</li>
                        <li id="logout-link" onClick={this.props.handleLogout}>Logout</li>
                    </ul>
                    :
                    null
                }
            </div>
            // <span className="" onClick={props.handleLogout}>Logout-{props.user.name}</span>
            // <i className="fa fas-caret"></i>
        );
    }
};

export default UserBox;