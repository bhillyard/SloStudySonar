//Navbar.js

import React from "react";
import 'bootstrap/dist/js/bootstrap.min.js'
import { Link } from 'react-router-dom'; // Import Link component


const Navbar = () => {
   return(
  <nav className="navbar navbar-expand-lg bg-body-tertiary alumni-sans">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">SLO Study Sonar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">

        <li className="nav-item">
        <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Study Spaces</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Study Sessions</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
);
};

export default Navbar