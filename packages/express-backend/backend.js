// backend.js
import express from "express";
import spaces_methods from "./studySpaceServices.js";

const app = express();
const port = 8000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(
    `Example app listening at http://localhost:${port}`
  );
});

// get all spaces
app.get("/spaces", (req, res) => {
    spaces_methods.getStudySpaces(req.query.title, req.query.photo, req.query.location, req.query.operatingHours, req.query.description).then((result) => {
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
  spaces_methods.deleteStudySpaceById(req.params.id).then((result) => {
    res.status(200).send(result);
  }).catch((error) => {
    res.status(404).send("Space not found");
  });

});



const spaces = {
  "spaces_list": [
    {
      "title": "Baker Science",
      "photo": "https://www.google.com",
      "location": "Baker Science Building",
      "operatingHours": "08:00-17:00",
      "description": "This is a space for students to study and work on projects in a nice air conditioned building"
    },
    {
      "_id": "2",
      "name": "CSL",
      "Photo URL": "https://www.google.com",
      "Location": "Frank E. Pillng Computer Science Building",
      "Hours Open/Avalable": "24 Hours will requested Access",
      "Description": "Great for computer science students, open 24 hours with requested access and is in close proximity to the CS Professors offices"
    }
    /*
    {
      "_id": "3",
      "name": "Home",
      "Photo URL": "https://www.google.com",
      "Location": "Your House",
      "Hours Open/Avalable": "24 Hours unless your roommates are loud",
      "Description": "Is cozy if you can afford the electric bill and wifi, otherwise, steal your neighbors wifi and use the library"
    }
    */
  ]
}