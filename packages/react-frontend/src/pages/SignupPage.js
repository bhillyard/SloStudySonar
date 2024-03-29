import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./SignupPage.css"; // Import CSS file for styling
import BackArrowButton from "./BackArrowButton"; // Import CircleArrowButton component
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook from React Router
import Navbar from "../Navigation/Navbar";

const SignupPage = () => {
  const navigate = useNavigate(); // Get the history object from React Router

  const [formData, setFormData] = useState({
    email: "",
    userName: "",
    firstName: "",
    lastName: "",
    displayName: "",
    major: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  function postUser(userData) {
    // eslint-disable-next-line no-undef
    const promise = fetch(`${process.env.REACT_APP_BACKEND_URL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    return promise;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    if (
      formData.userName === "" ||
      formData.email === "" ||
      formData.password === "" ||
      formData.confirmPassword === "" ||
      formData.displayName === "" ||
      formData.firstName === "" ||
      formData.lastName === ""
    ) {
      alert("Please fill out all the required fields");
      return;
    }
    // dont include confirmPassword in the request body
    const formDataWithoutConfirmPassword = { ...formData };
    delete formDataWithoutConfirmPassword.confirmPassword;

    //check if the major is empty, if so, set it to None (not sure if needed)
    if (!formDataWithoutConfirmPassword.major) {
      formDataWithoutConfirmPassword.major = "None";
    }

    postUser(formDataWithoutConfirmPassword)
      .then((response) => {
        if (response.status === 201) {
          alert("user created successfully");
          navigate("/dashboard");
        } else {
          alert("user not created");
        }
      })
      .catch((error) => {
        // alert(error);
        console.log(error);
      });

    // Add your signup logic here
    console.log(formData);
  };

  return (
    <div className="">
      <Navbar />
      <header className="App-header mb-5">
        <h1 className="alumni-sans">SLO Study Sonar</h1>
      </header>

      <div className="back-arrow-container mb-5">
        <BackArrowButton
          onClick={() => {
            /* Add your click handler logic here */
          }}
        />
      </div>

      <div className="row h-100 mx-auto">
        <div className="col-md-6 mx-auto">
          <div className="w-100">
            <h2 className="text-center mb-4">Sign Up</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group controlId="formBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter username"
                  name="userName"
                  value={formData.userName}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group controlId="formBasicFirstname">
                <Form.Label>firstName</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter first name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group controlId="formBasicLastname">
                <Form.Label>lastName</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter last name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group controlId="formBasicDisplayName">
                <Form.Label>Display Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter display name"
                  name="displayName"
                  value={formData.displayName}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group controlId="formBasicMajor">
                <Form.Label>Major</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter major(optional)"
                  name="major"
                  value={formData.major}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group controlId="formBasicConfirmPassword" className="mb-3">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
              </Form.Group>

              <div className="text-center">
                {" "}
                {/* Wrapper for centered button */}
                <Button variant="primary" type="submit" className="w-50">
                  Sign Up
                </Button>
              </div>
            </Form>
            <div className="mt-3 text-center">
              <span> Already have an account? </span>
              <Link to="/login">Log in here</Link>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div>
          <p>&copy; 2024 SLO Study Sonar. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default SignupPage;
