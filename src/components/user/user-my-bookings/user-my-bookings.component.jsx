import React from 'react';
import {serviceUnavailable} from '../../../data/utility';

const UserMyBookings = (props) => {
    serviceUnavailable();
    return (
        <div className="user-my-bookings-contianer">
            User My bookings
        </div>
    );
}

export default UserMyBookings;