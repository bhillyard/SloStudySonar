// backend.js
import express from "express";
import spaces_methods from "./studySpaceServices.js";
import users_methods from "./userServices.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";


const app = express();
const port = 8000;

//import routes
import users from "./routes/users.js";
//use routes
app.use("/users", users);




app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(
    `Example app listening at http://localhost:${port}`
  );
});

//Spaces Endpoints
// get all spaces
app.get("/spaces", (req, res) => {
    console.log("Run!");
    console.log(req.query.title, req.query.photo, req.query.location, req.query.operatingHours, req.query.description);
    spaces_methods.getStudySpaces(req.query.title, req.query.photo, req.query.location, req.query.operatingHours, req.query.description).then((result) => {
      console.log(result);
      res.status(200).send(result);
    }).catch((error) => {
      res.status(404).send("Spaces not found");
    });
});

// get a space by ID
app.get("/spaces/:id", (req, res) => {
  spaces_methods.findStudySpaceById(req.params.id).then((result) => {
    res.status(200).send(result);
  }).catch((error) => {
    res.status(404).send("Space not found");
  });
});

// add a new space
app.post("/spaces", (req, res) => {
  spaces_methods.addStudySpace(req.body).then((result) => {
    res.status(201).send(result);
  }).catch((error) => {
    res.status(400).send("Space not added");
  });
  
});

// delete a space by ID
app.delete("/spaces/:id", (req, res) => {
  spaces_methods.deleteStudySpace(req.params.id).then((result) => {
    res.status(200).send(result);
  }).catch((error) => {
    res.status(404).send("Space not found");
  });

});



