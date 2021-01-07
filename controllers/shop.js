const express = require('express')
const Deer = require('../models/deer.js')
const shop = express.Router()

//====Routes====


// BUY
shop.put("/buy/:id", (req, res) => {
  Deer.findById(req.params.id, (err, foundDeer) => {
    Deer.updateOne(foundDeer, {$inc: {qty: -1}}, {new:true}, (err, item)=> {})
  });

Deer.find({}, (error, foundDeer) => {
  res.render('index.ejs')
});
  res.redirect('/shop')
});


//index
shop.get('/',(req, res) => {
  Deer.find({}, (err, foundDeer) => {
    res.render('index.ejs', {
      deer: foundDeer
    })
  })
})

//new
shop.get('/new', (req, res) => {
  res.render('new.ejs')
})

// create
shop.post('/', (req, res) => {
  Deer.create(req.body, (err, createdDeer) => {
    res.redirect(`/shop`)
  })
})

//show
shop.get('/:id', (req, res) => {
  Deer.findById(req.params.id, (err, foundDeer) => {
    res.render('show.ejs', {
      deer: foundDeer
    })
  })
})

//edit
shop.get('/:id/edit', (req, res) => {
  Deer.findById(req.params.id, (err, foundDeer) => {
    res.render('edit.ejs',{
      deer: foundDeer
    })
  })
})



// update
shop.put('/:id', (req, res) => {
  Deer.findByIdAndUpdate(
    req.params.id,
    req.body, {new: true}, (err, updatedDeer) => {
      res.redirect(`/shop/${req.params.id}`)
    }
  )
})

// //buy
// shop.put('/:id/buy', (req, res) => {
//   Deer.findByIdAndUpdate(
//     req.params.id,
//     { $inc: { qty: -1 } },
//     { new: true },
//     (err, updatedComic) => {
//       res.redirect(`/shop/${req.params.id}`)
//     }
//   )
// })

// delete
shop.delete('/:id', (req, res) => {
  Deer.findByIdAndRemove(req.params.id, (err, deletedDeer) => {
    res.redirect('/shop')
  })
})

module.exports = shop
