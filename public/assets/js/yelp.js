var Yelp = require('yelp');

var yelp = new Yelp({
    consumer_key: process.env.YELP_CONSUMER_KEY,
    consumer_secret: process.env.YELP_CONSUMER_SECRET,
    token: process.env.YELP_ACCESS_TOKEN_KEY,
    token_secret: process.env.YELP_ACCESS_TOKEN_SECRET
});

module.exports = yelp;