const express = require('express')
const Deer = require('../models/deer.js')
const shop = express.Router()

//====Routes==== //


// //==== BUY ==== //
// shop.put("/buy/:id", (req, res) => {
//   Deer.findById(req.params.id, (err, foundDeer) => {
//     Deer.updateOne(foundDeer, {$inc: {qty: -1}}, {new:true}, (err, item)=> {})
//   });
//
// Deer.find({}, (error, foundDeer) => {
//   res.render('index.ejs')
// });
//   res.redirect('/shop')
// });


//==== INDEX ==== //
shop.get('/',(req, res) => {
  Deer.find({}, (err, foundDeer) => {
    res.render('index.ejs', {
      deer: foundDeer
    })
  })
})

//==== NEW ==== //
shop.get('/new', (req, res) => {
  res.render('new.ejs')
})



//==== SHOW ==== //
shop.get('/:id', (req, res) => {
  Deer.findById(req.params.id, (err, foundDeer) => {
    res.render('show.ejs', {
      deer: foundDeer
    })
  })
})

//==== EDIT ==== //
shop.get('/:id/edit', (req, res) => {
  Deer.findById(req.params.id, (err, foundDeer) => {
    res.render('edit.ejs',{
      deer: foundDeer
    })
  })
})
// Create a button



//==== UPDATES ==== //
shop.put('/:id', (req, res) => {
  Deer.findByIdAndUpdate(
    req.params.id,
    req.body, {new: true}, (err, updatedDeer) => {
      res.redirect('/shop')
    }
  )
})

//==== DELETE ==== //


shop.delete('/:id', (req, res) => {
  Deer.findByIdAndRemove(req.params.id, (err, deletedDeer) => {
    res.redirect('/shop')
  })
})

//==== Create ==== //
shop.post('/', (req, res) => {
  Deer.create(req.body, (err, createdDeer) => {
    res.redirect(`/shop`)
  })
})




shop.get('/deer/seed', (req,res) => {
  Deer.create([

    {
      name: 'Blitzen',
      description: 'Blitzen has light brown and cream fur, brown eyes (which he passed down to Rudolph) and has two lightning bolt-shaped markings on his muzzle. Like all Flyers he wears a Medal of Valor.',
      img: './imgs/Blizen.webp',
      price: 250,
      qty: 1,
    },
    {
      name: 'Comet',
      description: 'Comet has light brown and white fur with long antlers with a blue and red cap on his head and a whistle hung around his neck.',
      img: './imgs/Comet.jpg',
      price: 150,
      qty: 1,
    },
    {
      name: 'Cupid',
      description: 'Cupid has dark brown fur with blond hair, a short goatee and has a small heart shaped marking on his forehead. He also has dark circles around his eyes which he passes down to Arrow. Like all Flyers he wears a Medal of Valor.',
      img: './imgs/Cupid.jpg',
      price: 300,
      qty: 1
    },
    {
      name: 'Dancer',
      description: 'Dancer first appears on Christmas Eve during The Christmas Eve Launch along with the other Flyers guiding Santas sleigh into the sky.',
      img: './imgs/Dancer.jpg',
      price: 85,
      qty: 1,
    },
    {
      name: 'Dasher',
      description: 'Dasher has light brown and cream fur with black tipped ears with brown eyes. Like all Flyers he wears a Medal of Valor. Dasher like his brothers Blitzen and Comet, has light fur, though it is slightly darker than theirs.',
      img: './imgs/Dasher.jpg',
      price: 185,
      qty:1,
    },
    {
      name: 'Donner',
      description: 'Donner is the husband of Mrs. Donner, the father of Rudolph, the former lead reindeer of Santa Clauss sleigh team. Donner has light brown fur with white fur and his chest',
      img: './imgs/Donner.webp',
      price: 435,
      qty:1,
    },
    {
      name: 'Dasher',
      description: 'Dasher has light brown and cream fur with black tipped ears with brown eyes. Like all Flyers he wears a Medal of Valor. Dasher like his brothers Blitzen and Comet, has light fur, though it is slightly darker than theirs.',
      img: './imgs/Dasher.jpg',
      price: 185,
      qty:1,
    },
    {
      name: 'Prancer',
      description: 'Prancer has goldish-brown fur, blonde hair and brown eyes. Like all Flyers, he wears a Medal of Valor.',
      img: './imgs/Prancer.webp',
      price: 155,
      qty:1,
    },
    {
      name: 'Vixen',
      description: 'Vixen has brown fur with a tuft of blonde hair, bushy eyebrows, black tipped ears, and brown eyes. Like all Flyers he wears a Medal of Valor.',
      img: './imgs/Vixen.jpg',
      price: 240,
      qty:1,
    },
    {
      name: 'Rudolf',
      description: 'Rudolph is the son of Blitzen and Mitzi, the nephew of Dasher, Comet, and Cupid, the cousin and former rival of Arrow, the best friend, later boyfriend of Zoey, the lead reindeer on Santas sleigh team. He is known for his shiny Red nose',
      img: './imgs/Rudolf.jpg',
      price: 750,
      qty:1,
    },
  ],(error, deer) => {
    res.redirect('/shop')
  })
})

module.exports = shop
