const express = require('express');
const router = express.Router();
var pjson = require('../package.json');

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', {
    title: 'Welcome to Contoso!',
    version: pjson.version,
  });
});

module.exports = router;
