var express = require('express');
var router = express.Router();

// *GET users listing.
router.get('/', (req, res, next) => {
  res.render('home', {title: 'ToDo List'});
});

router.get('/register', (req, res) => {
  res.render('users/register', {title: 'ToDo List'});
});

module.exports = router;
