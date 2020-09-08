import React from 'react';
import './user-rental-portal.styles.css';
import CardContainer from '../../card-container/card-container.component';
// import alertify from 'alertifyjs';

const UserRentalPortal = (props) => {
    return (
        <div className="user-rental-portal-contianer">
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
                </div> :
                props.vehicles.length > 0 ?  
                <CardContainer user={props.user} vehicles={props.vehicles} page="UserPage" bookVehicle={props.bookVehicle}/>
                :
                <p>No vehicles found!!</p>
            }
        </div>
    );
}

export default UserRentalPortal;