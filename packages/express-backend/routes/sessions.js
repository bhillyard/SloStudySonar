import express from "express";
import sessions_methods from "../databaseServices/sessionServices.js";
import middleware from "./middleware.js";
import users_methods from "../databaseServices/userServices.js";

//set up router to route to backend.js
const router = express.Router();
router.use(express.json());

//Sessions Endpoints
router.get("/", (req, res) => {
  if (req.query.space) {
    sessions_methods
      .findSessionsBySpace(req.query.space)
      .then((result) => {
        res.status(200).send(result);
      })
      .catch((error) => {
        res.status(404).send("Sessions not found");
        console.log(error);
      });
  } else {
    sessions_methods
      .getAllSessions()
      .then((result) => {
        res.status(200).send(result);
      })
      .catch((error) => {
        res.status(404).send("Sessions not found");
        console.log(error);
      });
  }
});

router.get("/:id", (req, res) => {
  sessions_methods
    .findSessionById(req.params.id)
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((error) => {
      res.status(404).send("Session not found");
      console.log(error);
    });
});

router.post("/", middleware.authenticateUser, (req, res) => {
  const user = req.userRef;
  if (user == null) {
    res.status(403).send("User not authenticated, please sign in.");
  }
  users_methods
    .findUserById(user.id)
    .then(() => {
      req.body.host = user.id;
      sessions_methods
        .addSession(req.body)
        .then((result) => {
          res.status(201).send(result);
        })
        .catch((error) => {
          console.log(error);
          res.status(400).send("Session not added");
        });
    })
    .catch((error) => {
      res.status(404).send("User not found");
      console.log(error);
    });
});

router.delete("/:id", middleware.authenticateUser, (req, res) => {
  const user = req.userRef;
  if (user == null) {
    res.status(403).send("User not authenticated, please sign in.");
  } else {
    sessions_methods
      .findSessionById(req.params.id)
      .then((result) => {
        if (result.host == user.id) {
          sessions_methods
            .deleteSession(req.params.id)
            .then((result) => {
              res.status(200).send(result);
            })
            .catch((error) => {
              res.status(404).send("Session not found");
              console.log(error);
            });
        } else {
          res.status(403).send("User not authorized to delete this session.");
        }
      })
      .catch((error) => {
        res.status(404).send("Session not found");
        console.log(error);
      });
  }
});

export default router;
