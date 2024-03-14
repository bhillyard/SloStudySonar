# SloStudySonar

Hello! We are SLO Study Sonar!
Our project was inspired by the reduction of permanent study spaces here on campus due to the closing of the library. Study Spot options have only become more volatile over the last year. 
This shift in study space availability should not get in the way of your ability to study, since we are sure you have much more important things to worry about than finding somewhere to sit down and focus. That's where we come in.

Our goal is to offer a robust tool for students, professors, and faculty alike to find the perfect place to work on whatever they might have to do, no matter what kind of space they need. With SLO Study Sonar, you will never again have to question where you can study again!

Features:
* A crowd-sourced database of Study Spots in San Luis Obispo complete with information about each space along with real study space users' reviews so you know exactly what each space has to offer.
* A community study session board, allowing members to post study sessions at a specific study space. Other members can sign up and communicate to arrange plans, rides, and other details regarding a specific study session. Perfect for project groups at the end of the quarter nearing their project deadlines!
* Leave reviews on individual study spaces. Let other people know how great it is or maybe how bad it is. Let your opinion be heard about a spot!
* Create your own user profile. As a member of our site, you can keep track of your favorite study spots, and your upcoming study sessions. Be on the lookout, in the future, you will be able to access any materials from previous study sessions such as notes and presentations that you chose to upload during your study session.

Dev Environment setup:
In your dev branch make sure to clone the github repository locally and run npm install to acquire the necessary packages. Next switch to a local branch to do work that will be merged to main later. In this branch include a .github/workflows directory in the root directory. This needs to include a CITesting.yml file that specified which branch pushes to look for when creating the build for deployment. Additionally, if you are running the backend locally you will need a .env file with the necessary env variables of MONGODB_URI, REACT_APP_BACKEND_URL, BUCKET_NAME, PROJECT_ID, and KEYFILENAME with an appropriate json key file that matches the KEYFILENAME. REACT_APP_BACKEND_URL will just be set to http://localhost:8000 so that when you run code locally you will be able to view frontend in your local browser.