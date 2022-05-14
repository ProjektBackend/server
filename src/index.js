const express = require('express');
const app = express();
const cors = require('cors');

const userRoute = require("./api/routes/user")
app.use(cors());
app.use(express.json());

app.use("/get", userRoute);

app.listen(3001,() =>{

    console.log("your server is running on port 3001!");
} )