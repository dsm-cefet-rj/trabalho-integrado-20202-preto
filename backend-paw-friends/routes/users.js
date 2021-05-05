var express = require('express');
var router = express.Router();

var User = require('../models/users');
var passport = require('passport');
var authenticate = require('../authenticate');

const bodyParser = require('body-parser');
router.use(bodyParser.json());

router.post('/signup', (req, res, next) => {
    // #swagger.tags = ['User']

    User.register(new User({ username: req.body.username }), req.body.password,
        (err, user) => {
            if (err) {
                res.statusCode = 500;
                res.setHeader('Content-Type', 'application/json');
                res.json({ err: err });
            } else {
                passport.authenticate('local')(req, res, () => {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.json({ success: true, status: 'Registration Successful!' });
                });
            }
        });
});

router.post('/login', passport.authenticate('local'), (req, res) => {
    // #swagger.tags = ['User']

    var token = authenticate.getToken({ _id: req.user._id });
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({ success: true, token: token, status: 'You are successfully logged in!' });
});

router.get('/logout', (req, res) => {
    // #swagger.tags = ['User']

    if (req.session) {
        req.session.destroy();
        res.clearCookie('session-id');
        res.redirect('/');
    }
    else {
        var err = new Error('You are not logged in!');
        err.status = 403;
        next(err);
    }
});


module.exports = router;