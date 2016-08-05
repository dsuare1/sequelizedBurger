var express = require('express');

var burgers = require('../models')['burgers'];

var router = express.Router();

router.get('/', function(req, res) {
    res.redirect('/burgers');
});

router.get('/burgers', function(req, res) {
    burgers.findAll({}).then(function(result) {
        hbsObj = { burgers: result };
        res.render('index', hbsObj);
    });
});

router.put('/burgers/update/:id', function(req, res) {
    var burgerID = req.params.id;

    burgers.update({
        devoured: req.body.devoured
    }, {
        where: {
            id: burgerID
        }
    }).then(function() {
        res.redirect('/');
    });
});

router.put('/burgers/replace/:id', function(req, res) {
    var burgerID = req.params.id;

    burgers.update({
        devoured: req.body.devoured
    }, {
        where: {
            id: burgerID
        }
    }).then(function() {
        res.redirect('/');
    });
});

router.delete('/burgers/delete/:id', function(req, res) {
    var burgerID = req.params.id;

    burgers.destroy({
        where: {
            id: burgerID
        }
    }).then(function() {
        res.redirect('/');
    });
})

router.post('/burgers/create', function(req, res) {
    burgers.create({ burger_name: req.body.burger_name, devoured: req.body.devoured }).then(function() {
        res.redirect('/');
    });
});

module.exports = router;
