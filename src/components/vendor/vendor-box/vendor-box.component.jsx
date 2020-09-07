import React from 'react';
import {Route} from "react-router-dom";
import VendorDashboard from '../vendor-dashboard/vendor-dashboard.component';
import VendorVehRegForm from '../vendor-veh-reg-form/vendorVehRegForm.component';
import {withRouter} from 'react-router-dom';

const VendorBox = (props) => {
    console.log(props);
    return (
        <div>
            <Route exact path={props.match.path}>
            {
                props.error ? 
                <p>Try after some time</p>
                :
                <VendorDashboard vehicles={props.vehicles} isLoading={props.isLoading} updateFilterText={props.updateFilterText}/>
            }
            </Route>
            <Route exact path={`${props.match.path}/vendor-reg-form`}>
                <VendorVehRegForm addVehicle={props.addVehicle}/>
            </Route>
        </div>
    );
}

export default withRouter(VendorBox);