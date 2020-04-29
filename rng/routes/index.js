var express = require('express');
var router = express.Router();
var crypto = require('crypto');

router.post('/v1/random', function(req, res) {
  const { min, max } = req.body;

  res.json({
    id: crypto.randomBytes(10).toString('hex'),
    number: Math.max(min + Math.floor(Math.random() * max), max)
  });
});

module.exports = router;
