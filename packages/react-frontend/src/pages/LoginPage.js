import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './LoginPage.css'; // Import CSS file for styling

const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // add authentication here
    console.log(formData);
  };

  return (
    <div className="container-fluid h-100">
      <div className="row justify-content-center h-100">
        <div className="col-md-6 d-flex align-items-center">
          <div className="w-100">
            <h2 className="text-center mb-4">Log In</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicEmailorUserName">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name="email" value={formData.email} onChange={handleChange} />
              </Form.Group>

              <Form.Group controlId="formBasicPassword" className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name="password" value={formData.password} onChange={handleChange} />
              </Form.Group>

              <div className="text-center"> {/* Wrapper for centered button */}
            <Button variant="primary" type="submit" className="w-50">
              Sign Up
            </Button>
          </div>
            </Form>
            <div className="mt-3 text-center">
                <span> Don't have an account? </span>
                <a href="/signup">Sign up here</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
