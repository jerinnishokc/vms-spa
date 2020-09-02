import React from 'react';
import './card.styles.css';

const Card = (props) => {
    return (
        <div className="card">
            <div className="img-container">
                <img src="https://images.unsplash.com/photo-1533559662493-65ffecb14f7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=813&q=80" alt={props.vehicle.name} />
            </div>
            <div className="card-body">
                <h1>{props.vehicle.name}</h1>
                <hr/>
                <h2>Vendor name: To be entered</h2>
                <h3>Rental Price: $100/day</h3>                
            </div>
            <div className="button-container">
                <button className="booking-button">Book</button>
                <button className="edit-button"><i className="fas fa-edit"></i></button>
                <button className="delete-button"><i className="far fa-trash-alt"></i></button>
            </div>
        </div>
    );
};

export default Card;