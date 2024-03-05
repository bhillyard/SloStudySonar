import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.min.js'
import Navbar from './Navigation/Navbar.js'
import React from 'react';
import hills from './images/hills.jpg'
import cafe from './images/cafe.jpg'
import scout from './images/scout.jpg'
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook from React Router

function App() {

  const navigate = useNavigate(); // Get the history object from React Router

  const handleSignupClick = () => {
    navigate("/signup"); // Navigate to the "/signup" path
  };

  return (

    <div className="App">
      <Navbar />
      <header className="App-header">
        <h1>SLO Study Sonar</h1>
      </header>


      {/*Carousel*/}
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

      {/*Some text*/}
      <div class="mt-20 d-block">
        <h1 class="h1">Find Study Spots in San Luis Obispo, easily.</h1>

        {/*Sign up button*/}
        <button onClick={handleSignupClick} class="btn btn-primary btn-lg">Sign up</button>
      </div>

      <div class="text-start py-5">
        <h2 class="px-5"> New to SSS?</h2>
        <form class="px-5 mt-3"><button type="button" class="btn btn-secondary btn-lg">About SLO Study Sonar</button></form>
        <form class="px-5 mt-3"><button type="button" class="btn btn-secondary btn-lg">Browse Study Spaces</button></form>
        <form class="px-5 mt-3"><button type="button" class="btn btn-secondary btn-lg">Study Sessions Info</button></form>
      </div >

      {/* Sign in or create an account... div */}
      <div class="container my-10 py-2 px-5 bg-success-subtle">
        <h1> <span class="text-primary"> <a text-primary onClick={handleSignupClick}>Sign in</a></span> or <span class="text-primary">create an account</span> to save your favorite study spots and register for study sessions.</h1>
      </div>

      {/*Features div*/}
      <div class="py-5">
        <h1 class="text-start px-5">Features</h1>
        <div class="container text-center">
          <div class="row">
            <div class="col">
              Real reviews by Cal Poly students.
            </div>
            <div class="col">
              Upload and view images of study spaces in real time.
            </div>
            <div class="col">
              Form study groups with other students.
            </div>
          </div>
        </div>
      </div>

      <button onClick={handleSignupClick} class="btn btn-primary btn-lg">Sign up</button>


      {/*Bottom segment div*/}
      <div class="py-5">
        <div class="container text-center">
          <div class="row">
            <div class="col">
              About
            </div>
            <div class="col">
              Discover
            </div>
            <div class="col">
              Contact
            </div>
          </div>
        </div>
      </div>


    </div >




  );
}

export default App;
