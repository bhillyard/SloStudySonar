//Navbar.js

import React from "react";
import 'bootstrap/dist/js/bootstrap.min.js'
import { Link } from 'react-router-dom'; // Import Link component


const Navbar = () => {
   return(
  <nav class="navbar navbar-expand-lg bg-body-tertiary alumni-sans">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">SLO Study Sonar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">

        <li class="nav-item">
        <Link className="nav-link" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Study Spaces</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Study Sessions</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
);
};

export default Navbar