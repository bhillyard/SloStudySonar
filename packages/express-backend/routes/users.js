import express from "express";
import users_methods from "../userServices.js";


const router = express.Router();

//Users Endpoints
// get all Users
router.get("/", (req, res) => { 
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
router.get("/:id", (req, res) => {
  users_methods.findUserById(req.params.id).then((result) => {
    res.status(200).send(result);
  }).catch((error) => {
    res.status(404).send("User not found");
  });
});



// add a new user
router.post("/", async (req, res) => {
  try{
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    req.body.password = hashedPassword;
    console.log(salt);
    console.log(hashedPassword);

    users_methods.addUser(req.body).then((result) => {
      res.status(201).send(result);
    }).catch((error) => {
      res.status(400).send("User not added");
    });

  }catch(e){
    res.status(400).send("Error with password");
  }
  
});

// delete a user by ID
router.delete("/:id", (req, res) => {
  users_methods.deleteUser(req.params.id).then((result) => {
    res.status(200).send(result);
  }).catch((error) => {
    res.status(404).send("User not found");
  });
});

router.get("/login", (req, res) => {
  res.send("Why are you sending a get request to Login?");
});

router.post("/login", (req, res) => {
    userName = req.body.userName;
    password = req.body.password;

});

export default router;