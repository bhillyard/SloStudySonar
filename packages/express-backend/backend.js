// backend.js
import express from "express";
import spaces_methods from "./studySpaceServices.js";
import users_methods from "./userServices.js";

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

//Users Endpoints
// get all Users
app.get("/users", (req, res) => { 
  const userName = req.query.userName;
  const password = req.query.password;
  const email = req.query.email;

  if(!userName && !password && !email){ //gets all users
    users_methods.getAllUsers().then((result) => {
      res.status(200).send(result);
    }).catch((error) => {
      res.status(404).send("Users not found");
    });
  }else if(userName && password){ //gets users by userName and password
    users_methods.findUserByUserNameAndPassword(userName, password).then((result) => {
      res.status(200).send(result);
    }).catch((error) => {
      res.status(404).send("User not found");
    });
  }else if(userName){ //gets users by just userName
    users_methods.findUserByUserName(userName).then((result) => {
      res.status(200).send(result);
    }).catch((error) => {
      res.status(404).send("User not found");
    });
  }else if(email){ //gets users by just email
    users_methods.findUserByEmail(email).then((result) => {
      res.status(200).send(result);
    }).catch((error) => {
      res.status(404).send("User not found");
    });
  }
  
});

//get User by ID
app.get("/users/:id", (req, res) => {
  users_methods.findUserById(req.params.id).then((result) => {
    res.status(200).send(result);
  }).catch((error) => {
    res.status(404).send("User not found");
  });
});



// add a new user
app.post("/users", (req, res) => {
  users_methods.addUser(req.body).then((result) => {
    res.status(201).send(result);
  }).catch((error) => {
    res.status(400).send("User not added");
  });
});

// delete a user by ID
app.delete("/users/:id", (req, res) => {
  users_methods.deleteUser(req.params.id).then((result) => {
    res.status(200).send(result);
  }).catch((error) => {
    res.status(404).send("User not found");
  });
});

