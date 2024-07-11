import React from 'react';
import './Services.css';
const Services = () => {
  return (
    <section id="services">
      <div className="service">
        <div className="services-content">
          
        <h2>Our Services</h2>
        <p>Discover our catering services:</p>
        <ul>
          <li>Wedding Catering</li>
          <li>Corporate Events Catering</li>
          <li>Private Parties Catering</li>
          <li>Custom Menu Creation</li>
        </ul>
        </div>
      <div>
        <img src='https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' style={{ maxWidth: '300px', maxHeight: '300px', border: '2px solid black' ,marginTop:'50px'}}></img>
      </div>
      </div >
    </section>
  );
};

export default Services;
