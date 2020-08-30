import React from 'react';
import uuid from 'uuid/dist/v4';
import FormItem from '../../form-item/formItem.component';
import './vendorVehRegForm.styles.css';
import HelperContainer from '../../helper-container/helperContainer.component';
import CustomButton from '../../custom-button/customButton.component';

class VendorVehRegForm extends React.Component {
    state = {
        helperContent: {
            title: "Enter the new vehicle information",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        },
        vehicle: {
            regId: "",
            name: "",
            company: "",
        }
    }

    handleChange = (e) => {
        //console.log(e.target);
        //console.log(e.target.name,e.target.value);
        const [name,value] = [e.target.name, e.target.value]; 
        console.log(name,value);
        this.setState(state => {
            return {
                ...state,
                vehicle: {
                    ...state.vehicle,
                    [name]: value
                } 
            };
        }, () => console.log(this.state));
    };

    handleSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state);
        this.props.addVehicle({
            id: uuid(),
            ...this.state.vehicle
        });
        this.setState(state => (
            {
                ...state,
                vehicle: {
                    regId: "",
                    name: "",
                    company: "",
                }
            }
        ));
    };
    
    render() {
        return (
            <div className="form-container">
                <HelperContainer title={this.state.helperContent.title} helperText={this.state.helperContent.text}/>
                <form>
                    <FormItem type="text" label="Registration Number" name="regId" value={this.state.vehicle.regId} handleChange={this.handleChange} />
                    <FormItem type="text" label="Vehicle name" name="name" value={this.state.vehicle.name} handleChange={this.handleChange}/>
                    <FormItem type="text" label="Company" name="company" value={this.state.vehicle.company} handleChange={this.handleChange}/>
                    <CustomButton onClick={this.handleSubmit}>Register</CustomButton>
                </form>             
            </div>
        );
    }
}
//<button onClick={this.handleSubmit}>Register</button>
// <FormItem type="text" label="Registration Number" name="regId" value={this.state.regId} handleChange={this.handleChange} />
//                     <FormItem type="text" label="Vehicle name" name="name" value={this.state.name} handleChange={this.handleChange}/>
//                     <FormItem type="text" label="Company" name="company" value={this.state.company} onChange={this.handleChange}/>
/*<input type="text" placeholder="Registration Number" name="regId" value={this.state.regId} onChange={this.handleChange}/>
                <input type="text" placeholder="Vehicle name" name="name" value={this.state.name} onChange={this.handleChange}/>
                <input type="text" placeholder="Company" name="company" value={this.state.company} onChange={this.handleChange}/>*/

export default VendorVehRegForm;