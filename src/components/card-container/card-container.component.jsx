import React from 'react';
import Card from '../card/card.component';
import './card-container.styles.css';

const CardContainer = (props) => {
    return (
        <div className="card-outer-container">
            {
                props.page === 'UserPage' ? 
                <h1>Vehicles available for rent</h1> 
                : 
                <h1>Your vehicles</h1>
            }
            
            <div className="card-container">
                {
                    props.vehicles.map(x => <Card key={x.id} vehicle={x} page={props.page} bookVehicle={props.bookVehicle}/>)
                }
            </div>
        </div>
    );
};

export default CardContainer;