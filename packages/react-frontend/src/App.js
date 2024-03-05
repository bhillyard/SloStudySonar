import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.min.js'
import Navbar from './Navigation/Navbar.js'
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import hills from './images/hills.jpg'
import cafe from './images/cafe.jpg'
import scout from './images/scout.jpg'
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook from React Router

function App() {
  return (
  
   const navigate = useNavigate(); // Get the history object from React Router

   const handleSignupClick = () => {
    navigate("/signup"); // Navigate to the "/signup" path
   };
    <div className="App">
      <Navbar />
      <header className="App-header">
        <h1>SLO Study Sonar</h1>
      </header>

      <div id="carouselExample" class="carousel slide mt-5 mb-5">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={cafe} class="d-block w-50 mx-auto" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={scout} class="d-block w-50 mx-auto" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={hills} class="d-block w-50 d-inline-block mx-auto" alt="..." />
          </div>

        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <div class="mt-20 d-block">
        <h1 class="h1">Find Study Spots in San Luis Obispo, easily.</h1>
        <button onClick={handleSignupClick} class="btn btn-primary btn-lg">Sign up</button>
      </div>

      <div class="text-start px-5">
        <h2>New to SSS?</h2>
        <form class="px-5 mt-3"><button type="button" class="btn btn-secondary btn-lg">About SLO Study Sonar</button></form>
        <form class="px-5 mt-3"><button type="button" class="btn btn-secondary btn-lg">Browse Study Spaces</button></form>
        <form class="px-5 mt-3"><button type="button" class="btn btn-secondary btn-lg">Study Sessions Info</button></form>
      </div >
    </div >


  );
}

export default App;
