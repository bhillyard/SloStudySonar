import React from 'react';
import './about.css';
import logo from '../logo.svg';
import BackArrowButton from './BackArrowButton'; // Import CircleArrowButton component
import { Link } from 'react-router-dom';
import Navbar from '../Navigation/Navbar.js'


function About(){
    return(
<body>
    <Navbar />
      <header className="App-header">
        <h1>SLO Study Sonar</h1>
      </header>
  <div className="back-arrow-container">    
  <BackArrowButton onClick={() => { /* Add your click handler logic here */ }} />
  </div>

  <div class="about-main">
 
    <div class="container">
        
      <h2>About Us</h2>
      <p>Welcome to SLO Study Sonar! We're committed to providing students in San Luis Obispo with the best possible study spots. 
        Our mission is to create a space where students can find quiet, comfortable, and resourceful places to study, collaborate, and succeed.</p>
      <div class="about-story">
        <h3>Our Story</h3>
        <p>Founded by Cal Poly students in 2024, SLO Study Sonar was sparked by a pressing need that arose in the wake of the Kennedy Library's closure the previous year. As students faced the sudden scarcity of conducive study environments, we realized the importance of having a dedicated space for academic and collaborative pursuits. We've experienced firsthand the challenge of finding that quiet corner to prepare for exams or the ideal café for group projects. Driven by these challenges, we've created a one-stop platform to discover and share the best study locations across town, ensuring every student has access to comfortable, quiet, and resourceful study spots to learn and succeed.</p>
        </div>

        <div class="about-team">
        <h3>Meet the Team</h3>
        <p>Our team is made up of a diverse group of individuals united by a common goal: 
            enhancing your study experience. From tech wizards to coffee shop connoisseurs, we bring our unique strengths together to curate study spaces that cater to all needs.</p>
            <div class="team-members">
                <div class="team-member">
                <h4>Member Name</h4>
                <p>Title</p>
                <p>Short bio...</p>
            </div>
            <div class="team-member">
                <h4>Member Name</h4>
                <p>Title</p>
                <p>Short bio...</p>
            </div>
            <div class="team-member">
                <h4>Member Name</h4>
                <p>Title</p>
                <p>Short bio...</p>
            </div>
            <div class="team-member">
                <h4>Member Name</h4>
                <p>Title</p>
                <p>Short bio...</p>
            </div>
            <div class="team-member">
                <h4>Member Name</h4>
                <p>Title</p>
                <p>Short bio...</p>
            </div>
        </div>
      </div>
      <div class="about-values">
        <h3>Our Values</h3>
        <ul>
          <li><strong>Community:</strong> Building a supportive network for students in SLO.</li>
          <li><strong>Collaboration:</strong> Encouraging group study and knowledge sharing.</li>
          <li><strong>Innovation:</strong> Continuously improving our platform to serve you better.</li>
        </ul>
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

export default About;