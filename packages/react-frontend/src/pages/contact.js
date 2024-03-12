import React from 'react';
import './contact.css';
import logo from '../logo.svg';
import BackArrowButton from './BackArrowButton'; // Import CircleArrowButton component
import { Link } from 'react-router-dom';
import Navbar from '../Navigation/Navbar.js'


function Contact(){
    return(
<body>
    {/* <Navbar />
      <header className="App-header">
        <h1>SLO Study Sonar</h1>
      </header> */}

  <div class="contact-main">
  <BackArrowButton onClick={() => { /* Add your click handler logic here */ }} />

    <div class="container">
        
      <h2>Contact Us</h2>

      <p>Got a feature suggestion? Have any questions, comments, or concerns?  Feel free to contact us!</p>
      <p>E-Mail: slostudysonar@gmail.com</p>
      <p>Phone: 805-000-0SSS</p>
  
    </div>




  
 
    
   
    
    
  
</div>

  <footer>
    <div class="container">
      <p>&copy; 2024 SLO Study Sonar. All Rights Reserved.</p>
    </div>
  </footer>

</body>
    )
}

export default Contact;