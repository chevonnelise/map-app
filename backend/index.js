const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();
const userRoute = require("./routes/users");
const travelRoute = require("./routes/travelpins");

dotenv.config();

app.use(express.json());

const port = process.env.PORT || 8000;

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("MongoDB connected");
}).catch((err)=>console.log(err))

app.use("/api/users", userRoute);
app.use("/api/travelpins", travelRoute);

app.listen(port, ()=>{
    console.log("backend server is working")
})