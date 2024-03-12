// PrivacyPolicy.js
import React from 'react';
import './privacy.css'; // Assuming your CSS file is named style.css and is in the src/ directory
import BackArrowButton from './BackArrowButton'; // Import CircleArrowButton component
import Navbar from '../Navigation/Navbar.js'



function PrivacyPolicy() {
    return (
<body>
    

  <div class="privacy-policy-container">
  <BackArrowButton onClick={() => { /* Add your click handler logic here */ }} />


    <div class="container">
        <h2>Privacy Policy</h2>
        <div class="data">
        <h3>Data we collect</h3>
        </div>

        <div class="usage">
        <h4>Usage of your data</h4>
        </div>

        <div class="storage">
        <h5>Storage of data</h5>
        </div>

        <div class="tracking">
        <h6>Data tracking</h6>
        </div>
      
        <div class="opt-out">
        <h7>Opt-out</h7>
        </div>
        
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

export default PrivacyPolicy;