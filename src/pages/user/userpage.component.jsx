import React from 'react';
import Navbar from '../../components/main-nav/mainnav.component';
import Footer from '../../components/footer/footer.component';
import './userpage.styles.css';
import UserDecisionBox from '../../components/user/user-decision-box/userDecision.component';
import {getAllAvailableVehicles} from '../../data/vehicle.datastore';
import alertify from 'alertifyjs';
import {bookAVehicle} from '../../data/vehicle.datastore';
// import WithSpinner from '../../components/with-spinnner/withSpinner.component';

class UserPage extends React.Component {   
    state = {
        vehicles: [],    
        isLoading: true,
        searchField: ""
    }; 

    async componentDidMount() {
        try{
            const availableVehicles = await getAllAvailableVehicles();
            this.setVehiclesToState(availableVehicles);       
            console.log('Available vehicles:', availableVehicles);     
        } catch(e) {
            alertify.error('Error occurred');
        }
    }

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

    bookVehicle = (vehicle) => {
        this.setState(state => {
            const newState = state.vehicles.map(x => {
                    if(x.uid === vehicle.uid) {
                        let booking_status = null;
                        let booking_user_id = null;
                        let booking_user_name = null;
                        if(x.booking_status === 'Y') {
                            booking_status = 'N';
                            booking_user_id = null;
                            booking_user_name = null;
                        } else {
                            booking_status = 'Y';
                            booking_user_id = this.props.user.id;
                            booking_user_name = this.props.user.name;
                        }
                        return {...x,booking_status: booking_status, booking_user_id: booking_user_id, booking_user_name: booking_user_name};
                    }
                    return x.uid === vehicle.uid ? {...x, booking_status: 'N', booking_user_id: this.props.user.id, booking_user_name: this.props.user.name}: x;
                });
            return {
                vehicles: newState
            };
        }, () => {
            console.log('Updated vehicle list: ', this.state.vehicles);
        });
        bookAVehicle(vehicle);
    }

    render() {
        const {vehicles, searchField} = this.state;

        const filteredVehicles = vehicles.filter(x => x.name.toLowerCase().includes(searchField.toLowerCase()));

        return (
            <div className="userpage-container">
                <Navbar page="UserPage" user={this.props.user} logout={this.props.logout}/>
                <main className="userpage-main-continer">
                    <UserDecisionBox isLoading={this.state.isLoading} vehicles={filteredVehicles} updateFilterText={(e) => this.setState({ searchField: e.target.value })} bookVehicle={this.bookVehicle}/>
                </main>
                <Footer />
            </div>
        );
    }
}; 

export default UserPage;