require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const uploader = require('./cloudinary-setup');

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

///////////////////////////////////////////////////// Models /////////////////////////////////////////////////////

const stringToObjectId = string => mongoose.Types.ObjectId(string);

let userSchema = new Schema({
    username: String,
    firstname: String,
    lastname: String,
    email: String,
    password: String,
    car: String,
    camera: String,
    spots: [{
        type: Schema.Types.ObjectId,
        ref: 'spots',
        set:  stringToObjectId
    }]
})

const User = mongoose.model('users', userSchema)

let spotSchema = new Schema({
    car: String,
    type: String,
    engine: String,
    horsepower: Number,
    image: String,
    author: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        set:  stringToObjectId
    }
})

const Spot = mongoose.model('spots', spotSchema)

///////////////////////////////////////////////////// Sign up /////////////////////////////////////////////////////

app.post('/sign-up', (req, res) => {
    let user = req.body;
    let hash = bcrypt.hashSync(user.password, 10);
    user.password = hash;
    User.create(user)
        .then(result => {
            debugger
            res.json({message: 'User created'});
            console.log(result);
        })
        .catch(err => {
            res.json(err);
            console.log(err);
        })
});

///////////////////////////////////////////////////// Creating spot /////////////////////////////////////////////////////

app.post('/upload', uploader.single("image"), (req, res, next) => {
    if(!req.file) {
        next(new Error('No file uploaded!'));
        return;
    }
    res.json({ secure_url: req.file.secure_url });
});

app.post('/create-spot/:id', (req, res) => {
    req.body.author = req.params.id
    console.log(req.body)
    Spot.create(req.body)
        .then(result => {
            debugger
            // User.findByIdAndUpdate(req.params.id, {$push: {spots: result.id}})
            res.json({ message: 'Spot created' });
            console.log(result);
        })
        .catch(err => {
            res.json(err);
            console.log(err)
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

app.get("/profile", (req, res)=> {
    debugger
    if(req.session.user) {
      res.json(req.session.user)
    } else {
      res.status(403).json({message: "Unauthorized"})
    }
})

///////////////////////////////////////////////////// Listing all spots /////////////////////////////////////////////////////

app.get('/all-spots', (req, res) => {
    Spot.find({}).populate('author')
        .then(result => {
        res.status(200).json(result)
        })
        .catch(err => {
        res.status(500).json(err)
    })
})

///////////////////////////////////////////////////// Single spot /////////////////////////////////////////////////////

app.get('/single-spot/:id', (req, res) => {
    if(req.params.id) {debugger
        Spot.findOne({_id: req.params.id}).populate('author')
            .then(result => {
                res.status(200.).json(result)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }
})

///////////////////////////////////////////////////// Log out /////////////////////////////////////////////////////

app.get("/log-out",(req,res)=>{
    req.session.destroy();
})
  

const port = 5000;

app.listen(port, () => console.log(`server started on port ${port}`));