import express from "express";
import spaces_methods from "../studySpaceServices.js";
import middleware from "./middleware.js";
import users_methods from "../userServices.js";

const router = express.Router();
router.use(express.json());

//Spaces Endpoints
// get all spaces
router.get("/", (req, res) => {
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
router.get("/:id", (req, res) => {
  spaces_methods.findStudySpaceById(req.params.id).then((result) => {
    res.status(200).send(result);
  }).catch((error) => {
    res.status(404).send("Space not found");
  });
});

// add a new space
router.post("/", middleware.authenticateUser, (req, res) => {
  const user = req.userRef;
  if (user == null) {
    res.status(403).send("User not authenticated, please sign in.");
  }
  console.log(user);
  users_methods.findUserById(user.id).then((result) => {(console.log(result))});
  spaces_methods.addStudySpace(req.body).then((result) => {
    res.status(201).send(result);
  }).catch((error) => {
    res.status(400).send("Space not added");
  });
  
});

// delete a space by ID
router.delete("/:id", (req, res) => {
  spaces_methods.deleteStudySpace(req.params.id).then((result) => {
    res.status(200).send(result);
  }).catch((error) => {
    res.status(404).send("Space not found");
  });

});


export default router;