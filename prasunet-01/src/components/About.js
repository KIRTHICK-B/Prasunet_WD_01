import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about">
      <div className="abouts">
        <div>
          <img src='https://images.pexels.com/photos/1243337/pexels-photo-1243337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' style={{ maxWidth: '300px', maxHeight: '300px', border: '2px solid black' }}></img>
        </div>
        <div className="about-content">
          <h2>About Us</h2>
          <p>We are passionate about providing delicious food for all your special occasions. Our team is dedicated to delivering exceptional service to ensure your event is a memorable one.</p>
        </div>
      </div>
    </section>
  );
};

export default About;
