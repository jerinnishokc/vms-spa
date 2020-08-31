import React from 'react';
import Navbar from '../../components/main-nav/mainnav.component';
import SideNav from '../../components/sidenav/sidenav.component';
import Footer from '../../components/footer/footer.component';
import './vendorpage.styles.css';
import VendorBox from '../../components/vendor/vendor-box/vendor-box.component';
import {getAllVehicles, addVehicle} from '../../data/vehicle.datastore';

class VendorPage extends React.Component {   
    state = {
        isLoading: true,
        vehicles: []
    }; 

    async componentDidMount() {        
        const vehicles = await getAllVehicles();
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
                console.log('successfully updated the vehicles')
            });
        } else {
            alert('Error occurred');
        }
    };

    render() {
        return (
            <div className="vendorpage-container">
                <Navbar page="vendorpage" />
                <SideNav page="vendorpage" className="sidenav"/>
                <main>
                    <VendorBox addVehicle={this.addVehicle} vehicles={this.state.vehicles} isLoading={this.state.isLoading}/>
                </main>
                <Footer />
            </div>
        );
    }
}; 

export default VendorPage;