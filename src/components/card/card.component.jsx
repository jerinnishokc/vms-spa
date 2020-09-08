import React from 'react';
import './card.styles.css';

const Card = (props) => {   
    return (
        cardDecider(props)        
    );
};

const cardDecider = (props) => {
    if(props.page === 'VendorPage') {
        return (
            <div className="card">
                <div className="img-container">
                    <img src="https://images.unsplash.com/photo-1533559662493-65ffecb14f7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=813&q=80" alt={props.vehicle.name} />
                </div>
                <div className="card-body">
                    <h1>{props.vehicle.name}</h1>
                    <hr/>
                    <h2>Id: {props.vehicle.regId}</h2>
                    <h2>Company: {props.vehicle.company}</h2>
                    <h2>Vendor name: {props.vehicle.vendor_name}</h2>
                    <h3>Rental Price: Rs.{props.vehicle.price}/per day</h3>                
                    <h4>Booking Status: {props.vehicle.booking_status === 'Y' ? 'Booked' : 'Not-booked'}</h4>      
                    {
                        props.vehicle.booking_status === 'Y' ? 
                        <h5>Booked customer: {props.vehicle.booking_user_name}</h5>
                        : null
                    }          
                </div>
                <div className="vendor-button-container">
                    <button className="booking-button">Book</button>
                    <button className="edit-button"><i className="fas fa-edit"></i></button>
                    <button className="delete-button"><i className="far fa-trash-alt"></i></button>
                </div>
            </div>
        );
    } else if(props.page === 'UserPage'){
        return (
            <div className="card">
                <div className="img-container">
                    <img src="https://images.unsplash.com/photo-1533559662493-65ffecb14f7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=813&q=80" alt={props.vehicle.name} />
                </div>
                <div className="card-body">
                    <h1>{props.vehicle.name}</h1>
                    <hr/>
                    <h2>Id: {props.vehicle.regId}</h2>
                    <h2>Company: {props.vehicle.company}</h2>
                    <h2>Vendor name: {props.vehicle.vendor_name}</h2>
                    <h3>Rental Price: Rs.{props.vehicle.price}/per day</h3>                
                    <h4>Booking Status: {props.vehicle.booking_status === 'Y' ? 'Booked' : 'Not-booked'}</h4>      
                    {
                        props.vehicle.booking_status === 'Y' ? 
                        <h5>Booked customer: {props.vehicle.booking_user_name}</h5>
                        : null
                    }          
                </div>
                <div className="user-button-container">
                    <button className="booking-button" onClick={() => props.bookVehicle(props.vehicle)}>{props.vehicle.booking_status === 'Y' ? 'Un-Book' : 'Book'}</button>
                </div>
            </div>
        );
    }
};
export default Card;