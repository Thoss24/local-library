var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('user', { title: "User Page", name: "User Name"});
});

router.get('/:id', (req, res, next) => {
  console.log(req.params.id)
  if (req.params.id === '0') next('route')

  else next()
}, (req, res, next) => {
  res.render('user_id', { id: req.params.id});
});

router.get('/:id', function(req, res, next) {
  res.render('user', { title: "Failed", name: req.params.id })
});

module.exports = router;
