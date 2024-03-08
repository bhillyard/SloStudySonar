// backend.js
import express from "express";
import cors from "cors";



//setup app
const app = express();
const port = 8000;
app.use(cors());

//import routes
import users from "./routes/users.js";
import spaces from "./routes/spaces.js";


//use routes
app.use("/users", users);
app.use("/spaces", spaces);

//use JSON
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(
    `Example app listening at http://localhost:${port}`
  );
});