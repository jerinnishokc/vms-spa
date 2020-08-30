import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from '../../components/main-nav/mainnav.component';
import './homepage.styles.css';
import Footer from '../../components/footer/footer.component';

class HomePage extends React.Component {
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
            <div className="App">
            <Navbar page="HomePage"/>
            <main className="main-container">
                <section id="about">About</section>
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