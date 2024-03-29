import express from "express";
import users_methods from "../databaseServices/userServices.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import middleware from "./middleware.js";

//set up router to route to backend.js
const router = express.Router();
router.use(express.json());

//login endpoints
router.get("/login", (req, res) => {
  res.send("Why are you sending a get request to Login?");
});

//main login POST endpoint
router.post("/login", (req, res) => {
  const userName = req.body.userName;
  const password = req.body.password;
  console.log("sup");
  //locate user by userName (async for bcrypt)
  users_methods
    .findUserByUserName(userName)
    .then(async (result) => {
      const user = result[0];
      if (user) {
        try {
          if (await bcrypt.compare(password, user.password)) {
            //compare password and hashed password
            const token = jwt.sign(
              { id: user._id, userName: user.userName },
              process.env.ACCESS_TOKEN_SECRET,
            );
            res.json({ token: token });
          } else {
            res.send("Invalid Password");
          }
        } catch (e) {
          console.log(e);
          res.status(400).send("Error with login, please try again.");
        }
      } else {
        res.status(400).send("User not found");
      }
    })
    .catch((error) => {
      res.status(404).send("User not found");
      console.log(error);
    });
});

//Users Endpoints
// get all Users
router.get("/", (req, res) => {
  const userName = req.query.userName;
  const password = req.query.password;
  const email = req.query.email;

  if (!userName && !password && !email) {
    //gets all users
    users_methods
      .getAllUsers()
      .then((result) => {
        res.status(200).send(result);
      })
      .catch((error) => {
        res.status(404).send("Users not found");
        console.log(error);
      });
  } else if (userName && password) {
    //gets users by userName and password
    users_methods
      .findUserByUserNameAndPassword(userName, password)
      .then((result) => {
        res.status(200).send(result);
      })
      .catch((error) => {
        res.status(404).send("User not found");
        console.log(error);
      });
  } else if (userName) {
    //gets users by just userName
    users_methods
      .findUserByUserName(userName)
      .then((result) => {
        res.status(200).send(result);
      })
      .catch((error) => {
        res.status(404).send("User not found");
        console.log(error);
      });
  } else if (email) {
    //gets users by just email
    users_methods
      .findUserByEmail(email)
      .then((result) => {
        res.status(200).send(result);
      })
      .catch((error) => {
        res.status(404).send("User not found");
        console.log(error);
      });
  }
});

//get self
router.get("/self", middleware.authenticateUser, (req, res) => {
  const user = req.userRef;
  if (user == null) {
    res.status(401).send("Not logged in");
  }
  users_methods
    .findUserById(user.id)
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((error) => {
      console.log(error);
      console.log("Working");
      res.status(404).send("User not found");
    });
});

router.post(
  "/self/updateFavorite/",
  middleware.authenticateUser,
  (req, res) => {
    const user = req.userRef;
    if (user == null) {
      res.status(401).send("Not logged in");
    } else {
      users_methods.findUserById(user.id).then((result) => {
        const user = result;
        result.favoriteSpaces.push(req.body.favoriteSpace);
        users_methods
          .updateUser(user)
          .then((result) => {
            res.status(200).send(result);
          })
          .catch((error) => {
            res.status(400).send("Favorite not updated");
            console.log(error);
          });
      });
    }
  },
);

//get User by ID
router.get("/:id", (req, res) => {
  users_methods
    .findUserById(req.params.id)
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((error) => {
      res.status(404).send("User not found");
      console.log(error);
    });
});

// add a new user
router.post("/", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    req.body.password = hashedPassword;
    console.log(salt);
    console.log(hashedPassword);

    users_methods
      .addUser(req.body)
      .then((result) => {
        res.status(201).send(result);
      })
      .catch((error) => {
        console.log(error);
        res.status(400).send("User not added");
      });
  } catch (e) {
    res.status(400).send("Error with password");
  }
});

// delete a user by ID
router.delete("/:id", (req, res) => {
  users_methods
    .deleteUser(req.params.id)
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((error) => {
      res.status(404).send("User not found");
      console.log(error);
    });
});

export default router;
