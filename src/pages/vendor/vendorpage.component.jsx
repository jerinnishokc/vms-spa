import React from 'react';
import Navbar from '../../components/main-nav/mainnav.component';
import SideNav from '../../components/sidenav/sidenav.component';
import Footer from '../../components/footer/footer.component';
import './vendorpage.styles.css';
import VendorBox from '../../components/vendor/vendor-box/vendor-box.component';
import {getAllVendorVehicles, addVehicle} from '../../data/vehicle.datastore';
import alertify from 'alertifyjs';

class VendorPage extends React.Component {   
    state = {
        isLoading: true,
        vehicles: [],
        searchField: '',
        error: false
    }; 

    async componentDidMount() {      
        try {
            const vehicles = await getAllVendorVehicles(this.props.user.id);
            console.log("From the Vendor page componentDidMount: ");
            console.log("Vehicles: ", vehicles);
            this.setVehiclesToState(vehicles);
        } catch(e) {
            console.log(e);
        }
    }

    addVehicle = async (vehicle) => {
        // console.log('add vehicle: ', vehicle);
        const result = await addVehicle(vehicle);
        
        if(result === 'success') {
            alertify.success("Added the vehicle successfully!");
            const vehicles = await getAllVendorVehicles(this.props.user.id);
            this.setVehiclesToState(vehicles);
            // this.setState(state => {
            //     // console.log('state before update: ', state);
            //     const newList = [...state.vehicles, vehicle];
            //     // console.log('state before update: ', newList);
            //     return {
            //         vehicles : newList
            //     };
            // }, () => {
            //     alertify.success("Added the vehicle successfully!");
            //     console.log('successfully updated the vehicles')
            // });
        } else {
            alertify.error('Error occurred');
        }
    };
    
    setVehiclesToState(vehicles) {
        try{
            this.setState({
                vehicles: vehicles.map(x => ({
                    id: x.id,
                    uid: x.uid,                    
                    regId: x.regId, 
                    name: x.name, 
                    company: x.company,
                    price: x.price,
                    vendor_id: x.vendorId,
                    vendor_name: x.vendorName,
                    booking_status: x.bookingStatus,
                    booking_user_id: x.bookedUserUid,
                    booking_user_name: x.bookedUserName
                }))
            }, () => this.setState({isLoading: false}));
        }  catch(e) {
            this.setState({
                error: true
            }, () => {
                alertify.error('Time out');
            });
            console.log('Error occureed', e);
        }
    }

    render() {
        const {vehicles, searchField} = this.state;

        const filteredVehicles = vehicles.filter(x => x.name.toLowerCase().includes(searchField.toLowerCase()));

        return (
            <div className="vendorpage-container">
                <Navbar page="VendorPage" user={this.props.user} logout={this.props.logout}/>
                <SideNav page="vendorpage" className="sidenav"/>
                <main>
                    <VendorBox user={this.props.user} addVehicle={this.addVehicle} vehicles={filteredVehicles} isLoading={this.state.isLoading} updateFilterText={(e) => this.setState({ searchField: e.target.value })} error={this.state.error}/>
                </main>
                <Footer />
            </div>
        );
    }
}; 

export default VendorPage;