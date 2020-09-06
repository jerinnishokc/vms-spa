import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import VendorPage from './pages/vendor/vendorpage.component';
import HomePage from './pages/home/homepage.component';
import ScrollToTop from './components/scroll-to-top/scrollToTop.component';
import LoginPage from './pages/login/loginpage.component';

class App extends React.Component {
  
  render() {
      return (
        <div className="App">
          <Router>
            <ScrollToTop />
            <Switch>
              <Route exact path="/">
                <HomePage/>
              </Route>
              <Route path="/vendor">
                <VendorPage/>
              </Route>
              <Route path="/login">
                <LoginPage/>
              </Route>
            </Switch>
          </Router>
        </div>
    );
  }
}

export default App;
