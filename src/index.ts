require("dotenv").config();
import express from "express";

const app = express();
app.get('/', (req, res) => {
  res.send("helloWorld");
})

app.listen(process.env.PORT, () => {
  console.log("Server Running on port", process.env.PORT);
});


