var express = require('express');
var router = express.Router();



let animals = ['pig', 'goat', 'dog', 'cat'];

/* GET home page. */
router.get('/', function(req, res, next) {
  // let queryAnimal = req.query.animal;
  // if (animals.includes(queryAnimal)) {
  //   res.send('Yep, we have a ' + queryAnimal + '.');
  // } else {
  //   res.send('Nope, no ' + queryAnimal + ' here.');
  // }
  res.render('index')
});

router.post('/', function(req, res, next) {
  let bodyAnimal = req.body;
  if (animals.includes(bodyAnimal.animal)) {
    res.send('Already have a ' + bodyAnimal.animal + ' thanks.');
  } else {
    animals.push(bodyAnimal.animal);
    res.send(animals);
  }
});

router.post('/', function(req, res) {
  res.send('You successfully created a POST route!');
});

router.put('/', function(req, res) {
  res.send('You successfully created a PUT route!');
});

router.delete('/', function(req, res) {
  res.send('You successfully created a DELETE route!');
});

module.exports = router;