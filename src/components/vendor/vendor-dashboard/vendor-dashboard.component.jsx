import React from 'react';
import './vendor-dashboard.styles.css';
import CardContainer from '../../card-container/card-container.component';

const VendorDashboard = (props) => {
    return (
        <div className="vendor-dashboard">
            <input className="searchInputContainer" type="text" placeholder="Search vehicles" onChange={props.updateFilterText}/>
            {
                props.isLoading ? 
                <div className="loader-container">
                    <p>Let's get your vehicles</p>
                    <div className="lds-facebook">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                : 
                props.vehicles.length > 0 ?  
                <CardContainer vehicles={props.vehicles} />
                :
                <p>No vehicles found!!</p>
            }
        </div>
    );
}

export default VendorDashboard;