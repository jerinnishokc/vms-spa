import React from 'react';

const VendorDashboard = (props) => {
    console.log('From vehicle dashboard', props.vehicles);
    return (
        <div className="vendor-dashboard">
            {
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