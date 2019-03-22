const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
var session = require('express-session');
var MongoDBStore = require('connect-mongodb-session')(session);




const port = 5000;

app.listen(port, () => console.log(`server started on port ${port}`));