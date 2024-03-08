//Render Different UI Based on (whether user is signed in) props
import React from "react";
import LoggedIn from "./LoggedIn";
import NotLoggedIn from "./NotLoggedIn";
import './SignUpButton.css';

function StudySessions(){
    let loggedIn = true;
    return(
        <div id="authorization">
            <h1>
                {
                    loggedIn ? 'Your Study Sessions' : 'Study Sessions'
                }
            </h1>
            {
                loggedIn ? <LoggedIn/> : <NotLoggedIn/>
            }
        </div>
    )
}

export default StudySessions;