// backend.js
import express from "express";

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
    res.send(spaces);
});

// get a space by ID
app.get("/spaces/:id", (req, res) => {
  let result = spaces.spaces_list.find(space => space["id"] === req.params.id);
  if(result){
    res.status(200).send(result);
  }
  res.status(404).send("Space not found");
});

// add a new space
app.post("/spaces", (req, res) => {
  let userToAdd = req.body;
  spaces.spaces_list.push(userToAdd);
  res.send(userToAdd);
  
});

// delete a space by ID
app.delete("/spaces/:id", (req, res) => {
  let index = spaces.spaces_list.findIndex(space => space["_id"] === req.params.id);
  if(index !== -1){
    let removed = spaces.spaces_list.splice(index, 1);
    res.status(200).send(removed);
  }
  res.status(404).send("Space not found");
});



const spaces = {
  "spaces_list": [
    {
      "_id": "1",
      "name": "Baker Science",
      "Photo URL": "https://www.google.com",
      "Location": "Baker Science Building",
      "Hours Open/Avalable": "8am-5pm",
      "Description": "This is a space for students to study and work on projects in a nice air conditioned building"
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