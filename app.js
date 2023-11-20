require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5050;
const dbConnection = require("./dbconfig/connectDb");
const dbUrl = process.env.DBURL;
const routes = require("./Routes/routes");

dbConnection(dbUrl);

app.use(express.json());

app.get("/", (req, resp) => {
  resp.status(200).json({ message: "sucess" });
});

app.use("/api", routes);

app.listen(PORT, (err) => {
  if (err) {
    console.log("Server error");
  } else {
    console.log("Listning on port " + PORT);
  
  }
});
