/* Page maybe not needed */
import SignUpButton from "./SignUpButton";
import { useNavigate } from "react-router-dom";
import React from "react";

function SignUpButtonBehavior() {
  const navigate = useNavigate();
  function handleClick() {
    /* Define what should happen when the sign up button is clicked*/
    /* Maybe just redirect to sign up page rather than rewriting code from SignUpPage.js*/
    navigate("/signup");
  }
  return <SignUpButton onClick={handleClick} />;
}

export default SignUpButtonBehavior;
