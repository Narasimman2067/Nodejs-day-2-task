import express from "express";
import dotenv from "dotenv";
import dataBaseConnection from "./db.js";
import allRoutes from "./routes/allRoutes.js";
const app = express();
dotenv.config();

const port = process.env.PORT
dataBaseConnection();
app.use(express.json());



app.get("/", (req, res) => {
  res.send("welcome to our hall booking app");
});


app.use("/route", allRoutes);


app.listen(port,()=>{
    console.log(`${port} server connected succesfully`)
});
