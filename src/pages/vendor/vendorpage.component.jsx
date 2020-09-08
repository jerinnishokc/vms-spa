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
            this.setState({
                vehicles: vehicles.map(x => ({
                    id: x.vehId,
                    regId: x.id, 
                    name: x.name, 
                    company: x.company
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

    addVehicle = async (vehicle) => {
        // console.log('add vehicle: ', vehicle);
        const result = await addVehicle(vehicle);
        
        if(result === 'success') {
            this.setState(state => {
                // console.log('state before update: ', state);
                const newList = [...state.vehicles, vehicle];
                // console.log('state before update: ', newList);
                return {
                    vehicles : newList
                };
            }, () => {
                alertify.success("Added the vehicle successfully!");
                console.log('successfully updated the vehicles')
            });
        } else {
            alert('Error occurred');
        }
    };
    
    render() {
        const {vehicles, searchField} = this.state;

        const filteredVehicles = vehicles.filter(x => x.name.toLowerCase().includes(searchField.toLowerCase()));

        return (
            <div className="vendorpage-container">
                <Navbar page="VendorPage" user={this.props.user} logout={this.props.logout}/>
                <SideNav page="vendorpage" className="sidenav"/>
                <main>
                    <VendorBox addVehicle={this.addVehicle} vehicles={filteredVehicles} isLoading={this.state.isLoading} updateFilterText={(e) => this.setState({ searchField: e.target.value })} error={this.state.error}/>
                </main>
                <Footer />
            </div>
        );
    }
}; 

export default VendorPage;