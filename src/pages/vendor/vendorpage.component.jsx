import React from 'react';
import Navbar from '../../components/main-nav/mainnav.component';
import SideNav from '../../components/sidenav/sidenav.component';
import Footer from '../../components/footer/footer.component';
import './vendorpage.styles.css';
import VendorBox from '../../components/vendor/vendor-box/vendor-box.component';

class VendorPage extends React.Component {   
    state = {
        vehicles: []
    }; 

    addVehicle = (vehicle) => {
        // console.log('add vehicle: ', vehicle);
        this.setState(state => {
            // console.log('state before update: ', state);
            const newList = [...state.vehicles, vehicle];
            // console.log('state before update: ', newList);

            return {
                vehicles : newList
            };
        }, () => {
            console.log('successfully updated the vehicles')
        })
    };

    render() {
        return (
            <div className="vendorpage-container">
                <Navbar page="vendorpage" />
                <SideNav page="vendorpage" className="sidenav"/>
                <main>
                    <VendorBox addVehicle={this.addVehicle} vehicles={this.state.vehicles}/>
                </main>
                <Footer />
            </div>
        );
    }
}; 

export default VendorPage;