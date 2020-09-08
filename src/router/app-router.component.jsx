import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import VendorPage from '../pages/vendor/vendorpage.component';
import HomePage from '../pages/home/homepage.component';
import ScrollToTop from '../components/scroll-to-top/scrollToTop.component';
import LoginPage from '../pages/login/loginpage.component';
import SignUpPage from '../pages/signup/signupPage.component';
import PrivateRoute from './private-route.component';

const AppRouter = ({user, logout, loggedIn}) => {
    return (
        <Router>
        <ScrollToTop />
        <Switch>
          <Route exact path="/">
            <HomePage user={user} logout={logout}/>
          </Route>
          <PrivateRoute path="/vendor" user={user} accessType="vendor">
            <VendorPage user={user} logout={logout}/>
          </PrivateRoute>
          <Route path="/login">
            <LoginPage loggedIn={loggedIn} logout={logout}/>
          </Route>
          <Route path="/signup">
            <SignUpPage/>
          </Route>
        </Switch>
      </Router>
    );
}

export default AppRouter;