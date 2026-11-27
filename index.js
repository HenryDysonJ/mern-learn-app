const express = require('express');
const dotenv = require('dotenv').config();

const PORT = process.env.PORT || 8001;
const app = express();

app.get('/',(req, res)=>{
    res.json({"message":"Here is the page"})
    console.log("Here is the page")
})

app.listen(PORT, (req, res)=>{
    console.log(`Server is running localhost:${PORT}`);
})