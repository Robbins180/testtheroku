//___________________
//Dependencies
//___________________
const express = require('express');
const session = require('express-session')
const methodOverride  = require('method-override');
const mongoose = require ('mongoose');
const app = express ();
const db = mongoose.connection;
require('dotenv').config()


//___________________
//Controllers
//___________________

// const deerController = require('./controllers/reindeer.js')
// app.use('/deer', deerController)

const shopController = require('./controllers/shop.js')
app.use('/shop', shopController)

// const usersController = require('./controllers/users.js')
// app.use('/users', usersController)
//
// const sessionsController = require('./controllers/sessions.js')
// app.use('/sessions', sessionsController)

//___________________
//Seed
//___________________

// app.get('/seed', (req, res) => {
//     Deer.create(shopSeed, (err, createdShop) => {
//         console.log(createdShop,'\n\n shop created!')
//         res.redirect('/shop')
//     })
// })

const PORT = process.env.PORT || 3000;

//___________________
//Database
//___________________

const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI , { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false,
useCreateIndex: true }
);

// Error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));

//___________________
//Middleware
//___________________

app.use(methodOverride('_method'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());




app.get('/', (req, res) => {
  res.redirect('/fruits');
});

app.listen(PORT, () => console.log( 'Listening on port:', PORT));
