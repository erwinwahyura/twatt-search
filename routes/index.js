var express = require('express');
var router = express.Router();
require('dotenv').config()


/* GET home page. */
var OAuth = require('oauth');
  var oauth = new OAuth.OAuth(
    'https://api.twitter.com/oauth/request_token',
    'https://api.twitter.com/oauth/access_token',
    process.env.consumerkey,
    process.env.consumersecret,
    '1.0A',
    null,
    'HMAC-SHA1'
  );
router.get('/', function(req, res) {
  //res.send('Hello World!')
    oauth.get(
      'https://api.twitter.com/1.1/search/tweets.json?q=%40Jakarta', //puppy filter:twimg
      process.env.token, //test user token
      process.env.tokensecret, //test user secret
      function (e, data){
        if (e) console.error(e);
        // console.log(data.text);
        console.log(require('util').inspect(data));
        // var tamp = data.split(' , ')
        res.send(data.split(','))
      });
})

module.exports = router;
