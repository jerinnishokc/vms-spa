import React from 'react';
import './App.css';
import {checkLocalStorage, clearLocalStorage, storeInLocalStorage} from './data/utility';
import {kickStartAutoLogout} from './data/auth.datastore';
import AppRouter from './router/app-router.component';
// import alertify from 'alertifyjs';

class App extends React.Component {
  state = {
    user: null
  };

  componentDidMount() {
    const userData = checkLocalStorage("user");
    this.setState({
      user:userData
    });
  }

  loggedIn = (user) => {
    console.log('APP COMPONENT-LOGIN', user);
    this.setState({
      user: user
    }, () => {
      storeInLocalStorage("user", JSON.stringify(user));
      kickStartAutoLogout(user.tokenExpirationDate,this.logout);
    });
    // alertify.success("Successfully logged in!");
  }
  
  logout = () => {
    console.log('APP COMPONENT-LOGOUT');
    this.setState({
      user: null
    }, () => {
      clearLocalStorage("user");
    });
  }

  render() {
      return (
        <div className="App">
          <AppRouter user={this.state.user} loggedIn={this.loggedIn} logout={this.logout}/>
        </div>
    );
  }
}

export default App;
