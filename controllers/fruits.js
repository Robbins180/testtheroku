const express = require('express')
const router = express.Router()
const Fruit = require('../models/fruits.js')

// router.get('/fruits/:id/edit', (req,res) => {
//   Fruit.findByID(req.params.id, (error, foundFruit) => {
//     res.render('edit.ejs', {fruit:foundFruit})
//   })
// })

// router.put('/fruits/:id', (req,res) => {
//   if(req.body.readyToEat === 'on') {
//     req.body.readyToEat = true
//   } else {
//     req.body.readyToEat = false
//   }
//   Fruit.findByIdAndUpdate(req.params.id, req.body, {new:true}, (error,updatedModel) => {
//     res.redirect('/fruits/')
//   })
// })

// router.get('/fruits/seed', (req, res) => {
//     Fruit.create(
//         [
//             {
//                 name:'grapefruit',
//                 color:'pink',
//                 readyToEat:true
//             },
//             {
//                 name:'grape',
//                 color:'purple',
//                 readyToEat:false
//             },
//             {
//                 name:'avocado',
//                 color:'green',
//                 readyToEat:true
//             }
//         ],
//         (error, data) => {
//             res.redirect('/fruits')
//         }
//     )
// });

router.get('/', (req, res) => {
    Fruit.find({}, (error, allFruits) => {
        res.render(
            'index.ejs',
            {
                fruits: allFruits
            }
        )
    })
})

// router.get('/fruits/new', (req, res) => {
//     res.render('new.ejs');
// });

// router.post('/fruits', (req, res) => {
//     if(req.body.readyToEat === 'on'){
//         req.body.readyToEat = true;
//     } else {
//         req.body.readyToEat = false;
//     }
//     Fruit.create(req.body, (error, createdFruit) => {
//         res.redirect('/fruits')
//     });
// });
//
// router.get('/fruits/:id', (req, res) => {
//     Fruit.findById(req.params.id, (error, foundFruit) => {
//         res.render(
//             'show.ejs',
//             {
//                 fruit:foundFruit
//             }
//         )
//     })
// });
//
// router.delete('/fruits/:id', (req,res) => {
//   Fruit.findByIdAndRemove(req.params.id, (error, data) => {
//     res.redirect('/fruits')
//   })
// })

module.exports = router
