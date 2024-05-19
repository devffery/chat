const express = require('express');
const cors = require("cors");
const bcrypt = require('bcrypt');

const { pool } = require('./dbConfig');

const app = express();


require ('dotenv').config();


app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors());

const port = process.env.port || 5000;
app.listen(port, () => console.log(`Server is running at port ${port}`));

