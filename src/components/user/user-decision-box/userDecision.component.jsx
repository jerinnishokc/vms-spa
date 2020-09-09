import React from 'react';
import {Route} from "react-router-dom";
import UserMyBookings from '../user-my-bookings/user-my-bookings.component';
import UserRentalPortal from '../user-rental-portal/user-rental-portal.component';
import {withRouter} from 'react-router-dom';

const UserDecisionBox = (props) => {
    console.log(props);
    return (
        <div>
            <Route exact path={props.match.path}>
                <UserRentalPortal user={props.user} isLoading={props.isLoading} vehicles={props.vehicles} updateFilterText={props.updateFilterText} bookVehicle={props.bookVehicle}/>
            </Route>
            <Route exact path={`${props.match.path}/userMyBookings`}>
                <UserMyBookings user={props.user} bookedVehicles={props.bookedVehicles} bookVehicle={props.bookVehicle}/>
            </Route>
        </div>
    );
}

export default withRouter(UserDecisionBox);