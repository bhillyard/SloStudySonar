//Will display an Image, followed by three ul items
//sing up button will be here
import SignUpButtonBehavior from "./SignUpButtonBehavior";
import newBuildingImage from "./newbuilding.jpg";
import React from "react";

function NotLoggedIn() {
  return (
    <div>
      <img src={newBuildingImage} width="500px" />
      <ul>
        <li>Host group study sessions with SloStudySonar!</li>
        <li>
          Provide a date, location, and description for your study session.
        </li>
        <li>Register for study sessions with an SSS account.</li>
      </ul>
      <SignUpButtonBehavior />
    </div>
  );
}

export default NotLoggedIn;
