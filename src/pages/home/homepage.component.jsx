import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from '../../components/main-nav/mainnav.component';
import './homepage.styles.css';
import Footer from '../../components/footer/footer.component';
import { ReactComponent as LandingSVG } from '../../assets/undraw_order_a_car_3tww.svg';
import Box from '../../components/box/box.component';

class HomePage extends React.Component {
    static defaultProps = {
      services: [
        {id:1, name: "A", color: "red", imgUrl: "https://images.unsplash.com/photo-1482029255085-35a4a48b7084?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80"},
        {id:2, name: "B", color: "green", imgUrl: "https://images.unsplash.com/photo-1590253230376-315df106ebeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"},
        {id:3, name: "C", color: null, imgUrl: "https://images.unsplash.com/photo-1563720359838-8d9cdd36ceab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"},
        {id:4, name: "D", color: "pink", imgUrl: "https://images.unsplash.com/photo-1554672408-730436b60dde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80"},
        {id:5, name: "E", color: "blue"},
        {id:6, name: "F", color: "indigo"},
        {id:7, name: "G", color: "purple", imgUrl: "https://images.unsplash.com/photo-1541376936666-59ec998f1afd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=687&q=80"},
        {id:8, name: "H", color: "lightgreen"},
        {id:9, name: "H", color: "gray"},
        {id:10, name: "H", color: "aquamarine", imgUrl: "https://images.unsplash.com/photo-1518430272387-254558840136?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=699&q=80"}
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
                    <h1>About</h1>
                    <div className="about-content-container">
                      {
                        this.props.services.map(x => <Box key={x.id} service={x}/>)
                      }
                    </div>
                  </section>
                  <section id="services">
                    <h1>Services</h1>  
                    <ul>
                        <Link to="/vendor">Vendor services</Link>
                    </ul>                  
                  </section>
                  <section id="contact">Contact</section>          
              </main>
              <Footer />
            </div>
        );
    }
}

export default HomePage;