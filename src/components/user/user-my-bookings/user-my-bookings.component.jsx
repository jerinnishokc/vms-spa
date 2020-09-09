import React from 'react';
import {serviceUnavailable} from '../../../data/utility';
import CardContainer from '../../card-container/card-container.component';

const UserMyBookings = (props) => {
    serviceUnavailable();
    console.log('Booked vehicles:',props.bookedVehicles);
    return (
        <div className="user-my-bookings-contianer">
        {
            props.bookedVehicles.length > 0 ?  
            <CardContainer user={props.user} vehicles={props.bookedVehicles} page="UserBookingPage" bookVehicle={props.bookVehicle}/>
            :
            <p>No vehicles found!!</p>
        }
        </div>
    );
}

export default UserMyBookings;