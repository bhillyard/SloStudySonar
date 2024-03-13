import express from "express";
import spaces_methods from "../databaseServices/studySpaceServices.js";
import middleware from "./middleware.js";
import users_methods from "../databaseServices/userServices.js";
import reviews_methods from "../databaseServices/reviewServices.js";
import dotenv from "dotenv";
import multer from "multer";
import multerGoogleStorage from "multer-cloud-storage";

import {Storage} from "@google-cloud/storage";
dotenv.config();
//image uploads

const projectID = process.env.PROJECT_ID;
const keyFilename = process.env.KEYFILENAME;
const bucketName = process.env.BUCKET_NAME;

var upload = multer({
  storage: multerGoogleStorage.storageEngine({
    autoRetry: true,
    bucket: bucketName,
    projectId: projectID,
    keyFilename: keyFilename,
    uniformBucketLevelAccess: true,
    filename: (req, file, cb) => {
      const fname = `${Date.now()}_${file.originalname}`;
      cb(null, fname);
      
    }
  })
});







const router = express.Router();
router.use(express.json());




const storage = new Storage({projectID, keyFilename});
const bucket = storage.bucket(bucketName);




//Spaces Endpoints
// get all spaces
router.get("/", (req, res) => {
  console.log("Run!");
  console.log(
    req.query.title,
    req.query.photo,
    req.query.location,
    req.query.operatingHours,
    req.query.description,
  );
  spaces_methods
    .getStudySpaces(
      req.query.title,
      req.query.photo,
      req.query.location,
      req.query.operatingHours,
      req.query.description,
    )
    .then((result) => {
      console.log(result);
      result.forEach((space) => {
        space.photo = `https://storage.googleapis.com/${bucketName}/${space.photo}`;
      });
      res.status(200).send(result);
    })
    .catch((error) => {
      res.status(404).send("Spaces not found");
      console.log(error);
    });
});

//get all reviews
router.get("/reviews", (req, res) => {
  const author = req.query.author;

  if (author != null) {
    reviews_methods
      .findReviewByAuthor(author)
      .then((result) => {
        res.status(200).send(result);
      })
      .catch((error) => {
        res.status(404).send("Reviews not found");
        console.log(error);
      });
  } else {
    reviews_methods
      .getAllReviews()
      .then((result) => {
        res.status(200).send(result);
      })
      .catch((error) => {
        res.status(404).send("Reviews not found");
        console.log(error);
      });
  }
});

// get a space by ID
router.get("/:id", (req, res) => {
  spaces_methods
    .findStudySpaceById(req.params.id)
    .then((result) => {
      result.photo = `https://storage.googleapis.com/${bucketName}/${result.photo}`;
      res.status(200).send(result);
    })
    .catch((error) => {
      res.status(404).send("Space not found");
      console.log(error);
    });
});

// add a new space
router.post("/", middleware.authenticateUser, upload.single('photo'), (req, res) => {
  // (req, res, (err) => {
  //   console.log(err);
  // });
  const user = req.userRef;
  if (user == null || user == undefined) {
    res.status(403).send("User not authenticated, please sign in.");
    return;
  }
  
  console.log(user);
  users_methods.findUserById(user.id).then((result) => {
    console.log(result);
  });
  req.body.photo = req.file.filename;
  spaces_methods
    .addStudySpace(req.body)
    .then((result) => {
      res.status(201).send(result);
    })
    .catch((error) => {
      console.log(error);
      res.status(400).send("Space not added");
      console.log(error);
    });
});

// delete a space by ID
router.delete("/:id", (req, res) => {
  spaces_methods
    .deleteStudySpace(req.params.id)
    .then((result) => {
      const file = bucket.file(result.photo);
      file.delete().then(() => {
        res.status(200).send(result);
      }).catch((error) => {
        res.status(404).send("Photo not deleted");
        console.log(error);
      });
    })
    .catch((error) => {
      res.status(404).send("Space not found");
      console.log(error);
    });
});

router.get("/:id/reviews", (req, res) => {
  const author = req.query.author;

  if (author != null) {
    reviews_methods
      .findReviewByAuthor(author)
      .then((result) => {
        res.status(200).send(result);
      })
      .catch((error) => {
        res.status(404).send("Reviews not found");
        console.log(error);
      });
  } else {
    reviews_methods
      .findReviewBySpace(req.params.id)
      .then((result) => {
        res.status(200).send(result);
      })
      .catch((error) => {
        res.status(404).send("Reviews not found");
        console.log(error);
      });
  }
});

router.post("/:id/reviews", middleware.authenticateUser, (req, res) => {
  const user = req.userRef;
  if (user == null) {
    res.status(403).send("User not authenticated, please sign in.");
  } else {
    users_methods
      .findUserById(user.id)
      .then(() => {
        req.body.author = user.id;
        req.body.space = req.params.id;
        req.body.date = new Date();
        reviews_methods
          .addReview(req.body)
          .then((result) => {
            res.status(201).send(result);
          })
          .catch((error) => {
            res.status(400).send("Review not added");
            console.log(error);
          });
      })
      .catch((error) => {
        res.status(404).send("User not found");
        console.log(error);
      });
  }
});

router.delete(
  "/:id/reviews/:reviewId",
  middleware.authenticateUser,
  (req, res) => {
    const user = req.userRef;
    if (user == null) {
      res.status(403).send("User not authenticated, please sign in.");
    } else {
      reviews_methods
        .findReviewById(req.params.reviewId)
        .then((result) => {
          if (result.author == user.id) {
            reviews_methods
              .deleteReview(req.params.reviewId)
              .then((result) => {
                res.status(200).send(result);
              })
              .catch((error) => {
                res.status(404).send("Review not found");
                console.log(error);
              });
          } else {
            res.status(403).send("User not authorized to delete this review");
          }
        })
        .catch((error) => {
          res.status(404).send("Review not found");
          console.log(error);
        });
    }
  },
);

export default router;
