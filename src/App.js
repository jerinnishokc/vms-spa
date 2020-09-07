import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import VendorPage from './pages/vendor/vendorpage.component';
import HomePage from './pages/home/homepage.component';
import ScrollToTop from './components/scroll-to-top/scrollToTop.component';
import LoginPage from './pages/login/loginpage.component';
import {checkLocalStorage, clearLocalStorage} from './data/utility';
import alertify from 'alertifyjs';

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
    });
    // alertify.success("Successfully logged in!");
  }
  
  logout = () => {
    console.log('APP COMPONENT-LOGOUT');
    this.setState({
      user: null
    });
    clearLocalStorage("user");
    alertify.success("Successfully logged out!");
  }

  render() {
      return (
        <div className="App">
          <Router>
            <ScrollToTop />
            <Switch>
              <Route exact path="/">
                <HomePage user={this.state.user} logout={this.logout}/>
              </Route>
              <Route path="/vendor">
                <VendorPage user={this.state.user} logout={this.logout}/>
              </Route>
              <Route path="/login">
                <LoginPage loggedIn={this.loggedIn} logout={this.logout}/>
              </Route>
            </Switch>
          </Router>
        </div>
    );
  }
}

export default App;
