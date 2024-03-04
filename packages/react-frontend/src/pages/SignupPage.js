import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './SignupPage.css'; // Import CSS file for styling

const SignupPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    displayName: '',
    major: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    if (formData.username === '' || formData.email === '' || formData.password === '' || formData.confirmPassword === '' || formData.displayName === '') {
        alert("Please fill out all the required fields");
        return;
    }
    // Add your signup logic here
    console.log(formData);
  };

  return (
    <div className="container-fluid h-100">
      <div className="row justify-content-center h-100">
        <div className="col-md-6 d-flex align-items-center">
          <div className="w-100">
            <h2 className="text-center mb-4">Sign Up</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name="email" value={formData.email} onChange={handleChange} />
              </Form.Group>

              <Form.Group controlId="formBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter username" name="username" value={formData.username} onChange={handleChange} />
              </Form.Group>

              <Form.Group controlId="formBasicDisplayName">
                <Form.Label>Display Name</Form.Label>
                <Form.Control type="text" placeholder="Enter display name" name="displayName" value={formData.displayName} onChange={handleChange} />
              </Form.Group>

              <Form.Group controlId="formBasicMajor">
                <Form.Label>Major</Form.Label>
                <Form.Control type="text" placeholder="Enter major(optional)" name="major" value={formData.major} onChange={handleChange} />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name="password" value={formData.password} onChange={handleChange} />
              </Form.Group>

              <Form.Group controlId="formBasicConfirmPassword" className = "mb-3">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Confirm Password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
              </Form.Group>

              <div className="text-center"> {/* Wrapper for centered button */}
            <Button variant="primary" type="submit" className="w-50">
              Sign Up
            </Button>
          </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
