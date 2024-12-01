import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import Navbare from '../Common/Navbar';
import Footer from '../Common/Footer';
import About from './About';
import Card from './Card';
import Contact from './Contact';
import Map from './Map';




function Home() {
  const navigate = useNavigate();



    // Redirection vers la page d'inscription
    const handleReserveClick = () => {
      navigate('/listhome');
  };

  return (
    <div className="Home">
        <Navbare/>
      <div className="top-section">
        <div className="hero-section">
          <div className="hero-text">
            <h2>Charming guesthouses in the heart of Tunisia's nature</h2>
            <p>Create your perfect getaway, rent a guesthouse in Tunisia tailored to your vision.</p>
          </div>
          <div className="date-inputs">
            <input type="date" placeholder="Du" />
            <input placeholder="Au" type="date" />
            <button>OK</button>
          </div>
        </div>
      </div>
      <section className='bonde'>
        <p className='parag'>Prêt à réserver un séjour en pleine nature ?</p>
        <button className='btn-res' onClick={handleReserveClick}>Reserve</button>
      </section>

      <div id="about">
        <About/>
      </div>
      
      <div className="middle-section">
        <h2>Choose your destination</h2>
        <div className="card-section">
          <Card/>
        </div>
      </div>

      <div id="contact">
        <Contact/>
      </div>
      <Map/>
      <Footer/>
    </div>
  );
}

export default Home;
