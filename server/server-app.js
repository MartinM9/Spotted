const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
var session = require('express-session');
var MongoDBStore = require('connect-mongodb-session')(session);

///////////////////////////////////////////////////// Body parser /////////////////////////////////////////////////////

var bodyParser = require('body-parser'); 
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

///////////////////////////////////////////////////// Connect to DB /////////////////////////////////////////////////////

mongoose.connect('mongodb://localhost/spotted', {useNewUrlParser: true})
        .then(x => {
            console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
        })
        .catch(err => {
            console.error('Error connecting to mongo', err)
        });

///////////////////////////////////////////////////// CORS /////////////////////////////////////////////////////

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}))

///////////////////////////////////////////////////// Sessions /////////////////////////////////////////////////////

var store = new MongoDBStore({
    uri: 'mongodb://localhost:27017/spotted',
    collection: 'mySessions'
  });
  
  app.use(session({
    secret: 'This is a secret',
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7 // 1 week
    },
    store: store,
    resave: true,
    saveUninitialized: false
  }));

///////////////////////////////////////////////////// Schema /////////////////////////////////////////////////////

let userSchema = new Schema({
    username: String,
    firstname: String,
    lastname: String,
    email: String,
    password: String,
    car: String,
    camera: String
})

const User = mongoose.model('users', userSchema)

///////////////////////////////////////////////////// Sign up /////////////////////////////////////////////////////

app.post('/sign-up', (req, res) => {
    let user = req.body;
    let hash = bcrypt.hashSync(user.password, 10);
    user.password = hash;
    User.create(user)
        .then(result => {
            res.json({message: 'User created'});
            console.log(result);
        })
        .catch(err => {
            res.json(err);
            console.log(err);
        })
})

///////////////////////////////////////////////////// Log in /////////////////////////////////////////////////////

app.post('/log-in', (req, res) => {
    User.findOne({username: req.body.username})
        .then(result => {
            if(!result) {
                res.status(403).json({errorMessage: 'Invalid credentials'})
                return
            }
            if(bcrypt.compareSync(req.body.password, result.password)) {
                req.session.user = result._doc;
                const {password, ...user} = result._doc;
                res.status(200).send({user: user}) 
            } else {
                res.status(401).json({errorMessage: 'Invalid credentials'})
            }
        })
        .catch(err => {
            res.status(500).json({errorMessage: err})
        })
})


const port = 5000;

app.listen(port, () => console.log(`server started on port ${port}`));