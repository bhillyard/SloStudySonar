import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./LoginPage.css"; // Import CSS file for styling
import BackArrowButton from "./BackArrowButton"; // Import CircleArrowButton component
import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    userName: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  function postUser(userData) {
    const promise = fetch("http://localhost:8000/users/login", {
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
    // add authentication here
    postUser(formData)
      .then((response) => {
        if (response.status === 200) {
          alert("user logged in successfully");
          response.json().then((res) => {
            const token = res.token;
            Cookies.set("token", token, { expires: 1, secure: true });
          });
          navigate("/dashboard");
        } else {
          alert(response.status);
        }
      })
      .catch((error) => {
        // alert(error);
        alert(error);
      });
  };

  return (
    <div className="container-fluid h-100 d-flex flex-column">
      <BackArrowButton/>
      <div className="row justify-content-center flex-grow-1">
        <div className="col-md-6 d-flex align-items-center">
          <div className="w-100">
            <h2 className="text-center mb-4">Log In</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicUserName">
                <Form.Label>User name</Form.Label>
                <Form.Control
                  type="userName"
                  placeholder="Enter userName"
                  name="userName"
                  value={formData.userName}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword" className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </Form.Group>

              <div className="text-center">
                {" "}
                {/* Wrapper for centered button */}
                <Button variant="primary" type="submit" className="w-50">
                  Log in
                </Button>
              </div>
            </Form>
            <div className="mt-3 text-center">
              <span> Don't have an account? </span>
              <Link to="/signup">Sign up here</Link>
            </div>
            <div className="text-center mt-3"></div>
          </div>
        </div>
      </div>
      <footer>
             <div class="container">
                <p>&copy; 2024 SLO Study Sonar. All Rights Reserved.</p>
            </div>
        </footer>
    </div>
  );
};

export default LoginPage;
