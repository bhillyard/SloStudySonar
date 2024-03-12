import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.min.js';
import Navbar from './Navigation/Navbar.js';
import React from 'react';
import hills from './images/hills.jpg';
import cafe from './images/cafe.jpg';
import scout from './images/scout.jpg';
import review from './images/reviews.jpg';
import discover from './images/discover.png';
import team from './images/team2.png';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook from React Router
import { Link } from 'react-router-dom';
import './App.css';




function App() {

  const navigate = useNavigate(); // Get the history object from React Router

  const handleSignupClick = () => {
    navigate("/signup"); // Navigate to the "/signup" path
  };

  const handleStudySpaceClick = () => {
    navigate("/studySpaces"); // Navigate to the "/studySpaces" path
  };

  const handleAboutClick = () => {
    navigate("/About");
  };

  return (

    <div className="App source-sans-3">
      <Navbar />
      <header className="App-header">
        <h1 class="alumni-sans">SLO Study Sonar</h1>
      </header>


      {/*Carousel*/}
      <div id="carouselExample" class="carousel slide py-5">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={cafe} class="d-block w-75 mx-auto" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={scout} class="d-block w-75 mx-auto" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={hills} class="d-block w-75 d-inline-block mx-auto" alt="..." />
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
      <div class="mt-20 d-block pb-5">
        <h1 class="h1 source-sans-3">Find Study Spots in San Luis Obispo, easily.</h1>

        {/*Sign up button*/}
        <button onClick={handleSignupClick} class="btn btn-success btn-lg alumni-sans">Sign up</button>
      </div>

      <div class="py-5">
        <h2 class="text-start px-5 source-sans-3"> New to SSS?</h2>
        <form class="mt-3 alumni-sans"><button type="button" onClick={handleAboutClick} class="btn w-75 btn-override">About SLO Study Sonar</button></form>
        <form class="mt-3 alumni-sans"><button type="button" onClick={handleStudySpaceClick} class="btn w-75 btn-override ">Browse Study Spaces</button></form>
        <form class="mt-3 alumni-sans"><button type="button" class="btn w-75 btn-override">Study Sessions Info</button></form>
      </div >

      {/* Sign in or create an account... div */}
      <div class="container my-10 py-2 px-5 green-div source-sans-3">
        <h1> <span class="text-primary"> <Link to="/login">Log in here</Link></span> or <span class="text-primary"><Link to="/signup">create an account</Link></span> to save your favorite study spots and register for study sessions.</h1>
      </div>

      {/*Features div*/}
      <div class="py-5">
        <h1 class="text-start px-5 source-sans-3">Features</h1>
        <div class="container text-center">
          <div class="row">
            <div class="col source-sans-3">
              <div><img src={review} class="w-75"/></div>
              <strong>Real reviews </strong>by Cal Poly students.
            </div>
            <div class="col source-sans-3">
            <div><img src={discover} class="w-50"/></div>
              <strong>Upload and view images</strong> of study spaces in real time.
            </div>
            <div class="col source-sans-3">
            <div>
              <img src={team} class="w-50"/></div>
              
              <strong>Form study groups</strong> with other students.
            </div>
          </div>
        </div>
      </div>

      <button onClick={handleSignupClick} class="btn btn-success btn-lg alumni-sans">Sign up</button>


      {/*Bottom segment div*/}
      <div class="mt-5 py-5 green-div">
        <div class="container text-center">
          <div class="row">
            <div class="col">
              <h5>About</h5>
              <div class="py-2"> 
              <Link to="/about">About SLO Study Sonar</Link>
              </div>
              <div> 
              <Link to="/Privacy">Privacy Policy</Link>
              </div>
            </div>
            <div class="col">
              <h5>Discover</h5>
              <div class="py-2"> 
              <Link to="/about">About SLO Study Sonar</Link>
              </div>
              <div> 
                <a href="#">Study Sessions</a>
              </div>
            </div>
            <div class="col">
              <h5>Contact</h5>
              <div class="py-2"> 
              <Link to="/Contact">Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
      </div>


      <footer>
    <div class="container">
      <p>&copy; 2024 SLO Study Sonar. All Rights Reserved.</p>
    </div>
  </footer>

    </div >




  );
}

export default App;