import React from 'react';
import './vendor-dashboard.styles.css';

const VendorDashboard = (props) => {
    console.log('From vehicle dashboard', props.vehicles);
    console.log('isLoading', props.isLoading);

    return (
        <div className="vendor-dashboard">
            {
                props.isLoading ? 
                //<p>Loading</p>
                <div className="lds-facebook">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                : 
                props.vehicles.length > 0 ?  
                <ul>
                    {props.vehicles.map(x => 
                        <li key={x.id}>{x.regId}-{x.name}-{x.company}</li>
                    )}
                </ul>
                :
                <p>No vehicles yet!!</p>
                
            }
        </div>
    );
}

export default VendorDashboard;