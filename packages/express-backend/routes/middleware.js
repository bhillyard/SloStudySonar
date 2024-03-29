import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

//middleware to authenticate user
function authenticateUser(req, res, next) {
  const authHeader = req.headers.authorization; //grabs the eithentication information from the header
  const token = authHeader && authHeader.split(" ")[1]; //gets the token from the auth header
  console.log("token: " + token);
  if (token == null) {
    req.userRef = null;
    next();
  } else {
    //verify token
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
      if (err) {
        console.log("Verification error");
        return res.sendStatus(403);
      } else {
        //allows access to the userRef in the request
        req.userRef = user;
      }
      next();
    });
  }
}

export default {
  authenticateUser,
};
