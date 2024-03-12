import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.min.js'
import Navbar from './Navigation/Navbar.js'
import React from 'react';
import hills from './images/hills.jpg'
import cafe from './images/cafe.jpg'
import scout from './images/scout.jpg'
import review from './images/reviews.jpg'
import discover from './images/discover.png'
import team from './images/team2.png'
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook from React Router
import { Link } from 'react-router-dom';

function App() {

  const navigate = useNavigate(); // Get the history object from React Router

  const handleSignupClick = () => {
    navigate("/signup"); // Navigate to the "/signup" path
  };

  const handleStudySpaceClick = () => {
    navigate("/studySpaces"); // Navigate to the "/studySpaces" path
  }

  return (

    <div className="App">
      <Navbar />
      <header className="App-header">
        <h1>SLO Study Sonar</h1>
      </header>


      {/*Carousel*/}
      <div id="carouselExample" className="carousel slide py-5 bg-warning-subtle">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={cafe} className="d-block w-50 mx-auto" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={scout} className="d-block w-50 mx-auto" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={hills} className="d-block w-50 d-inline-block mx-auto" alt="..." />
          </div>

        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/*Some text*/}
      <div className="mt-20 d-block pb-5 bg-warning-subtle">
        <h1 className="h1">Find Study Spots in San Luis Obispo, easily.</h1>

        {/*Sign up button*/}
        <button onClick={handleSignupClick} className="btn btn-success btn-lg">Sign up</button>
      </div>

      <div className="text-start py-5">
        <h2 className="px-5"> New to SSS?</h2>
        <form className="px-5 mt-3"><button type="button" className="btn btn-warning btn-lg">About SLO Study Sonar</button></form>
        <form className="px-5 mt-3"><button type="button" onClick={handleStudySpaceClick} className="btn btn-warning btn-lg">Browse Study Spaces</button></form>
        <form className="px-5 mt-3"><button type="button" className="btn btn-warning btn-lg">Study Sessions Info</button></form>
      </div >

      {/* Sign in or create an account... div */}
      <div className="container my-10 py-2 px-5 bg-success-subtle">
        <h1> <span className="text-primary"> <Link to="/login">Log in here</Link></span> or <span className="text-primary"><Link to="/signup">create an account</Link></span> to save your favorite study spots and register for study sessions.</h1>
      </div>

      {/*Features div*/}
      <div className="py-5">
        <h1 className="text-start px-5">Features</h1>
        <div className="container text-center">
          <div className="row">
            <div className="col">
              <div><img src={review} className="w-75"/></div>
              <strong>Real reviews </strong>by Cal Poly students.
            </div>
            <div className="col">
            <div><img src={discover} className="w-50"/></div>
              <strong>Upload and view images</strong> of study spaces in real time.
            </div>
            <div className="col">
            <div>
              <img src={team} className="w-50"/></div>
              
              <strong>Form study groups</strong> with other students.
            </div>
          </div>
        </div>
      </div>

      <button onClick={handleSignupClick} className="btn btn-success btn-lg">Sign up</button>


      {/*Bottom segment div*/}
      <div className="mt-5 py-5 bg-success-subtle">
        <div className="container text-center">
          <div className="row">
            <div className="col">
              <h5>About</h5>
              <div className="py-2"> 
                <a href="#">About SLO Study Sonar</a>
              </div>
              <div> 
                <a href="#">Privacy Policy</a>
              </div>
            </div>
            <div className="col">
              <h5>Discover</h5>
              <div className="py-2"> 
                <a href="#">Study Spaces</a>
              </div>
              <div> 
                <a href="#">Study Sessions</a>
              </div>
            </div>
            <div className="col">
              <h5>Contact</h5>
              <div className="py-2"> 
                <a href="#">Contact Us</a>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div >




  );
}

export default App;