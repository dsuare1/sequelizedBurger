var express = require('express');

var burger = require('../models/burger.js');

var yelp = require('../public/assets/js/yelp.js');

var router = express.Router();

router.get('/', function(req, res) {
    res.redirect('/burgers');
});

router.get('/burgers', function(req, res) {
    burger.selectAll(function(data) {
        var hbsObj = { burgers: data };
                                                        // sort: 2 here sorts Yelp results
                                                        // by ranking, with highest at top
        yelp.search({ term: 'burgers', location: 'Austin', sort: 2 }).then(function(yelpData) {
            // append 'yelp' key to 'hbsObj' (handlebars Object) with stores from 'yelpData.businesses'
            hbsObj.yelp = yelpData.businesses;
            // 'hbsObj' sent to 'index.handlebars' (which comprises the <body> of 'main.handlebars')
            //  and rendered there with handlebars syntax (  {{ burgers: data }}  and {{ yelp.data }})
            //  using the key value pairs established here
            res.render('index', hbsObj);
        }).catch(function(err) {
            console.error(err);
        });
    });
});

router.put('/burgers/update/:id', function(req, res) {
    var queryCondition = 'id = ' + req.params.id;

    burger.updateOne(queryCondition, function() {
        res.redirect('/');
    });
});

router.put('/burgers/replace/:id', function(req, res) {
    var queryCondition = 'id = ' + req.params.id;

    burger.replaceOne(queryCondition, function() {
        res.redirect('/');
    });
});

router.delete('/burgers/delete/:id', function(req, res) {
    var queryCondition = 'id = ' + req.params.id;

    burger.deleteOne(queryCondition, function() {
        res.redirect('/');
    })
})

router.post('/burgers/create', function(req, res) {
    burger.insertOne(['burger_name', 'devoured'], [req.body.burger_name, req.body.devoured], function() {
        res.redirect('/');
    });
});

module.exports = router;
