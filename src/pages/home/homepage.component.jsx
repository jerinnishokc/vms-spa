import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from '../../components/main-nav/mainnav.component';
import './homepage.styles.css';
import Footer from '../../components/footer/footer.component';
import { ReactComponent as LandingSVG } from '../../assets/undraw_order_a_car_3tww.svg';
import { ReactComponent as UserServiceSVG } from '../../assets/undraw_order_ride_xjs4.svg';
import { ReactComponent as VendorServiceSVG } from '../../assets/undraw_Vehicle_sale_a645.svg';
import Box from '../../components/box/box.component';

class HomePage extends React.Component {
    static defaultProps = {
      services: [
        {id:1, name: "Automobile", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s", color: "red", imgUrl: "https://images.unsplash.com/photo-1482029255085-35a4a48b7084?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80"},
        {id:2, name: "Rent", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",color: "green", imgUrl: "https://images.unsplash.com/photo-1590253230376-315df106ebeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"},
        {id:3, name: "Premium service", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",color: 'yellow', imgUrl: "https://images.unsplash.com/photo-1563720359838-8d9cdd36ceab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"},
        {id:4, name: "Ease of use", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s", color: "pink", imgUrl: "https://images.unsplash.com/photo-1554672408-730436b60dde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80"},
        {id:5, name: "Security", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",color: "blue", imgUrl: "https://images.unsplash.com/photo-1554672408-730436b60dde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80"},
        {id:6, name: "Track your vehicle", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",color: "indigo", imgUrl: "https://images.unsplash.com/photo-1554672408-730436b60dde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80"},
        {id:7, name: "GPS", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",color: "purple", imgUrl: "https://images.unsplash.com/photo-1541376936666-59ec998f1afd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=687&q=80"},
        {id:8, name: "H", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",color: "lightgreen", imgUrl: "https://images.unsplash.com/photo-1554672408-730436b60dde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80"},
        {id:9, name: "Highway Assistance", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",color: "gray", imgUrl: "https://images.unsplash.com/photo-1554672408-730436b60dde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80"},
        {id:10, name: "Insurance Coverage", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",color: "aquamarine", imgUrl: "https://images.unsplash.com/photo-1518430272387-254558840136?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=699&q=80"}
      ]
    };

    state = {
        data: []
    };
    
      componentDidMount() {
        console.log("App component did mount is called");
        
      }
    
      handleClick = async (e) => {
        console.log("This is handle click function");
        console.log(this);
        console.log(e.target);
    
        try{
          const jsonData = await fetch("https://localhost:5001/weatherforecast");
          const weatherData = await jsonData.json();
          this.setState({
            data: weatherData
          }, () => console.log("Current state: ", this.state));
    
        } catch(err) {
          console.log(err);
        }
    
      };
      
    render() {
        return (
            <div>
              <Navbar page="HomePage"/>
              <main className="main-container">
                  <section id="landing">
                    <div className="landing-content-container">
                      <h1>Travel with us</h1>
                      <h2>We serve you better!</h2>
                    </div>                     
                    <div className="landing-image-container">
                      <LandingSVG className="landing-image"/>
                    </div>
                  </section>
                  <section id="about">
                    <div className="about-content-container">
                      {
                        this.props.services.map(x => <Box key={x.id} service={x}/>)
                      }
                    </div>
                  </section>
                  <section id="services">
                    <h1>Services</h1>  
                    <div className="services-container">
                        <div>
                          <UserServiceSVG className="services-container-image"/>
                        </div>
                        <div>
                          <Link to="/vendor">Vendor</Link>
                          <VendorServiceSVG className="services-container-image"/>
                        </div>
                        {/*<Link to="/vendor">Vendor services</Link>*/}
                    </div>                  
                  </section>
                  <section id="contact">
                    <h1>Contact</h1>
                    <div className="social-icons">
                      <i className="fab fa-whatsapp"></i>
                      <i className="fab fa-twitter"></i>
                      <i className="fab fa-linkedin-in"></i>
                      <i className="fab fa-instagram"></i>
                      <i className="fab fa-facebook"></i>
                      <i className="fab fa-youtube"></i>
                  </div>
                  </section>          
              </main>
              <Footer />
            </div>
        );
    }
}

export default HomePage;